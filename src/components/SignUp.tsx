import { useState } from "react";

interface SignupInterface{
    openForm: boolean;
}

const Signup = ({ openForm }:SignupInterface)  => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSignUpClick = (event: SubmitEvent) => {
        event.preventDefault();
        window.location.href = "https://www.google.com";
    };

    if (!openForm) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">

                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Create an account
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        Sign up to get started with us
                    </p>
                </div>

                <form
                    id="signup"
                    onSubmit={handleSignUpClick}
                    className="flex flex-col gap-5"
                >
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="emailid"
                            className="text-sm font-medium text-gray-700"
                        >
                            Email address
                        </label>

                        <input
                            type="email"
                            id="emailid"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            placeholder="you@example.com"
                            className="rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="password"
                            className="text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>

                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="••••••••"
                            className="rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 rounded-lg bg-black px-4 py-3 font-semibold text-white transition hover:bg-gray-800"
                    >
                        Create account
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <button className="font-semibold text-black hover:underline">
                        Log in
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Signup;