import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FormattedMessage } from "react-intl";
import FormInput from "../components/FormInput";

const Signin = () => {
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="min-h-screen bg-zinc-950"
    >
      <div className="min-h-screen flex">
        <div className="relative hidden overflow-hidden bg-zinc-900 lg:flex lg:w-1/2">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

          <div className="relative flex w-full flex-col justify-between p-12">
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              <FormattedMessage id="signup.brand" />
            </Link>

            <div className="max-w-lg">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-500">
                <FormattedMessage id="signin.sidebarBadge" />
              </p>

              <h1 className="text-5xl font-bold leading-tight text-white">
                <span className="block text-zinc-500">
                  <FormattedMessage id="signin.sidebarTitle" />
                </span>
              </h1>

              <p className="mt-6 max-w-md text-lg leading-8 text-zinc-400">
                <FormattedMessage id="signin.sidebarDescription" />
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="h-9 w-9 rounded-full border-2 border-zinc-900 bg-zinc-700" />
                  <div className="h-9 w-9 rounded-full border-2 border-zinc-900 bg-zinc-600" />
                  <div className="h-9 w-9 rounded-full border-2 border-zinc-900 bg-zinc-500" />
                </div>

                <p className="text-sm text-zinc-400">
                  <FormattedMessage id="signin.sidebarWorkspace" />
                </p>
              </div>
            </div>

            <p className="text-sm text-zinc-600">
              <FormattedMessage id="signup.copyright" />
            </p>
          </div>
        </div>

        <div className="flex flex-1 min-w-0 items-center justify-center bg-white px-6 py-16 text-zinc-900 sm:px-10 pt-60">
          <div className="w-full max-w-md">
            <Link
              to="/"
              className="mb-16 block text-center text-2xl font-bold lg:hidden"
            >
              <FormattedMessage id="signup.brand" />
            </Link>

            <div className="mb-10">
              <p className="mb-3 text-sm font-medium uppercase tracking-wide text-zinc-500">
                <FormattedMessage id="signin.formBadge" />
              </p>

              <h2 className="text-4xl font-bold tracking-tight">
                <FormattedMessage id="signin.formHeading" />
              </h2>

              <p className="mt-3 text-zinc-500">
                <FormattedMessage id="signin.formDescription" />
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <FormInput />

              <button
                type="submit"
                className="w-full rounded-xl bg-zinc-950 px-4 py-3.5 font-semibold text-white transition hover:bg-zinc-800 active:scale-[0.99]"
              >
                <FormattedMessage id="signin.submitButton" />
              </button>
            </form>

            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-zinc-200" />

              <span className="text-xs text-zinc-400">
                <FormattedMessage id="signin.orText" />
              </span>

              <div className="h-px flex-1 bg-zinc-200" />
            </div>

            <p className="mt-8 text-center text-sm text-zinc-500">
              <FormattedMessage id="signin.signupPrompt" />{" "}
              <Link
                to="/signup"
                className="font-semibold text-zinc-900 hover:underline"
              >
                <FormattedMessage id="signin.signupLink" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Signin;
