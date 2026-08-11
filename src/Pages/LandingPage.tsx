import { useState } from "react";
import NavBar from "../components/NavBar";
import Signup from "../components/SignUp";

const LandingPage = () => {
    const [openForm, setOpenForm] = useState(false);

    return (
        <div className="min-h-screen w-full bg-linear-to-b from-black via-zinc-950 to-zinc-900 text-white">
            <NavBar setOpenForm={setOpenForm} />

            <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6">
                <div className="mx-auto flex max-w-6xl flex-col items-center text-center">

                    <div className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
                        ✨ Simple task management for everyone
                    </div>

                    <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
                        Turn your ideas into
                        <span className="block bg-linear-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                            meaningful progress.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
                        TaskFlow helps you organize your work, stay focused,
                        and get things done without the unnecessary complexity.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <button
                            onClick={() => setOpenForm(true)}
                            className="rounded-xl bg-white px-7 py-3.5 font-semibold text-black shadow-lg transition hover:-translate-y-0.5 hover:bg-zinc-200"
                        >
                            Get started →
                        </button>

                        <button
                            className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/10"
                        >
                            Explore TaskFlow
                        </button>
                    </div>

                    <p className="mt-8 text-sm text-zinc-500">
                        No complicated setup. Just create, organize, and accomplish.
                    </p>
                </div>
            </main>

            <Signup
                openForm={openForm}
                setOpenForm={setOpenForm}
            />
        </div>
    );
};

export default LandingPage;