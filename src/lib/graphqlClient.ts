import { handleForceLogout } from "../utils/handleForceLogout";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

type GraphQLResponse<T> = {
  data: T;
  errors?: Array<{ message: string }>;
};

export async function fetchGraphQL<T = unknown>(
  query: string,
  variables: Record<string, unknown> = {},
  userToken?: string
): Promise<T> {
  const endpoint = `${SUPABASE_URL}/graphql/v1`;
  const authToken = userToken || SUPABASE_ANON_KEY;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (response.status === 401) {
    handleForceLogout();
    throw new Error("Session expired. Please log in again.");
  }

  const json = (await response.json()) as GraphQLResponse<T>;

  if (json.errors && json.errors.length > 0) {
    const isAuthError = json.errors.some(
      (err) =>
        err.message.toLowerCase().includes("jwt") ||
        err.message.toLowerCase().includes("unauthorized") ||
        err.message.toLowerCase().includes("expired")
    );

    if (isAuthError) {
      handleForceLogout();
    }

    throw new Error(json.errors.map((err) => err.message).join("\n"));
  }

  return json.data;
}
