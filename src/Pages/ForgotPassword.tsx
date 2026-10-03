import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { authService } from "../api/authService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);
    setError(null);

    try {
      await authService.resetPassword(email);
      setMessage("A password reset link has been sent to your email address.");
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Failed to send reset link";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-zinc-950"
    >
      <div className="flex min-h-screen">
        <div className="relative hidden overflow-hidden bg-zinc-900 lg:flex lg:w-1/2">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

          <div className="relative flex w-full flex-col justify-between p-12">
            <Link to="/" className="text-2xl font-bold tracking-tight text-white">
              TaskFlow
            </Link>

            <div className="max-w-lg">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-500">
                Account Recovery
              </p>
              <h1 className="text-5xl font-bold leading-tight text-white">
                <span className="block text-zinc-500">Forgot your password?</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-8 text-zinc-400">
                No worries! Enter your email address and we'll send you instructions to reset your password.
              </p>
            </div>

            <p className="text-sm text-zinc-600">© TaskFlow. All rights reserved.</p>
          </div>
        </div>

        <div className="flex flex-1 min-w-0 items-center justify-center bg-white px-6 py-16 text-zinc-900 sm:px-10">
          <div className="w-full max-w-md">
            <Link to="/" className="mb-16 block text-center text-2xl font-bold lg:hidden">
              TaskFlow
            </Link>

            <div className="mb-8">
              <p className="mb-2 text-sm font-medium uppercase tracking-wide text-zinc-500">
                Password Reset
              </p>
              <h2 className="text-4xl font-bold tracking-tight">Forgot Password</h2>
              <p className="mt-3 text-zinc-500">
                Enter your email address to receive a password reset link.
              </p>
            </div>

            {error && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                <p className="font-semibold">Error</p>
                <p className="mt-0.5 text-xs text-red-600">{error}</p>
              </div>
            )}

            {message && (
              <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                <p className="font-semibold">Check your email</p>
                <p className="mt-0.5 text-xs text-green-600">{message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl bg-zinc-950 px-4 py-3.5 font-semibold text-white transition hover:bg-zinc-800 active:scale-[0.99] disabled:opacity-50"
              >
                {isLoading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-zinc-500">
              Remember your password?{" "}
              <Link to="/login" className="font-semibold text-zinc-900 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ForgotPassword;
