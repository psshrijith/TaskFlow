import { useContext } from "react";
import NavBar from "../components/NavBar";
import { FormattedMessage } from "react-intl";
import { useTheme } from "../context/Theme/useTheme";

const LandingPage = () => {

    const {theme} = useTheme();
    console.log("theme value in the landing page", theme)

    return (
        <div className="min-h-screen w-full bg-linear-to-b from-black via-zinc-950 to-zinc-900 text-white">
            <NavBar />

            <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6">
                <div className="mx-auto flex max-w-6xl flex-col items-center text-center">

                    <div className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
                        <FormattedMessage id="landing.heroBadge" />
                    </div>

                    <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
                        <FormattedMessage id="landing.heroTitleLine1" />
                        <span className="block bg-linear-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                            <FormattedMessage id="landing.heroTitleLine2" />
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
                        <FormattedMessage id="landing.heroDescription" />
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <button
                            className="rounded-xl bg-white px-7 py-3.5 font-semibold text-black shadow-lg transition hover:-translate-y-0.5 hover:bg-zinc-200"
                        >
                            <FormattedMessage id="landing.primaryCta" />
                        </button>

                        <button
                            className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/10"
                        >
                            <FormattedMessage id="landing.secondaryCta" />
                        </button>
                    </div>

                    <p className="mt-8 text-sm text-zinc-500">
                        <FormattedMessage id="landing.footerNote" />
                    </p>
                </div>
            </main>

        </div>
    );
};

export default LandingPage;