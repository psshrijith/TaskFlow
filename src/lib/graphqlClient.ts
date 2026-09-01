const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

export async function fetchGraphQL<T = any>(
  query: string,
  variables: Record<string, any> = {},
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

  const json = await response.json();

  if (json.errors && json.errors.length > 0) {
    throw new Error(json.errors.map((err: { message: string }) => err.message).join("\n"));
  }

  return json.data;
}
