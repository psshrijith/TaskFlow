import { useState } from "react";
import { Link } from "react-router-dom";
import {motion} from 'motion/react';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <motion.div
            initial={{y: "100%"}}
            animate={{y:0}}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
            className="min-h-screen bg-white"

        >

        <div className="min-h-screen bg-zinc-950 text-white">
            <div className="w-full min-h-screen flex">

                <div className="relative hidden overflow-hidden bg-zinc-900 lg:flex w-1/2">
                    
                    <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

                    <div className="relative flex w-full flex-col justify-between p-12">

                        <Link
                            to="/"
                            className="text-2xl font-bold tracking-tight"
                        >
                            TaskFlow
                        </Link>

                        <div className="max-w-lg">
                            <p className="mb-4 text-sm font-medium uppercase text-zinc-500">
                                Work smarter
                            </p>

                            <h1 className="text-5xl font-bold leading-tight">
                                Turn your tasks into
                                <span className="block text-zinc-500">
                                    meaningful progress.
                                </span>
                            </h1>

                            <p className="mt-6 text-lg leading-8 text-zinc-400">
                                Organize your work, stay focused, and keep
                                everything moving forward with TaskFlow.
                            </p>

                            <div className="mt-8 space-y-4 text-sm text-zinc-300">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
                                        ✓
                                    </span>
                                    Simple task management
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
                                        ✓
                                    </span>
                                    Stay organized and focused
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
                                        ✓
                                    </span>
                                    Built for getting things done
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-zinc-600">
                            © 2026 TaskFlow
                        </p>
                    </div>
                </div>

            
                <div className="flex items-center justify-center bg-white px-6 py-12 text-zinc-900 flex-1 min-w-0">
                    <div className="w-full max-w-md">

                        <Link
                            to="/"
                            className="mb-12 block text-center text-2xl font-bold lg:hidden"
                        >
                            TaskFlow
                        </Link>

                        <div className="mb-10">
                            <p className="mb-3 text-sm font-medium text-zinc-500">
                                GET STARTED
                            </p>

                            <h2 className="text-4xl font-bold tracking-tight">
                                Create your account
                            </h2>

                            <p className="mt-3 text-zinc-500">
                                Start organizing your work today.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSignUp}
                            className="space-y-6"
                        >
                            
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Email address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    placeholder="you@example.com"
                                    className="w-full rounded-xl border border-zinc-200 px-4 py-3.5 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-4 focus:ring-zinc-100"
                                    required
                                />
                            </div>

                           
                            <div>
                                <div className="mb-2 flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="text-sm font-medium"
                                    >
                                        Password
                                    </label>

                                    <span className="text-xs text-zinc-400">
                                        Minimum 8 characters
                                    </span>
                                </div>

                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                    placeholder="••••••••"
                                    className="w-full rounded-xl border border-zinc-200 px-4 py-3.5 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-4 focus:ring-zinc-100"
                                    required
                                    minLength={8}
                                />
                            </div>

                            
                            <button
                                type="submit"
                                className="w-full rounded-xl bg-zinc-950 px-4 py-3.5 font-semibold text-white transition hover:bg-zinc-800 active:scale-[0.99]"
                            >
                                Create account
                            </button>
                        </form>

                        <div className="my-8 flex items-center gap-4">
                            <div className="h-px flex-1 bg-zinc-200" />
                            <span className="text-xs text-zinc-400">
                                OR
                            </span>
                            <div className="h-px flex-1 bg-zinc-200" />
                        </div>

                        <p className="text-center text-sm text-zinc-500">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="font-semibold text-zinc-900 hover:underline"
                            >
                                Log in
                            </Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </motion.div>
    )
};

export default Signup;