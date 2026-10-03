import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { authService } from "../api/authService";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const token = params.get("access_token");
      if (token) {
        setAccessToken(token);
      }
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (!accessToken) {
      setError("Invalid or expired reset token. Please request a new password reset link.");
      return;
    }

    setIsLoading(true);

    try {
      await authService.updatePassword(password, accessToken);
      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Failed to update password";
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
                Security Update
              </p>
              <h1 className="text-5xl font-bold leading-tight text-white">
                <span className="block text-zinc-500">Set a new password</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-8 text-zinc-400">
                Ensure your account stays secure by choosing a strong password.
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
                New Password
              </p>
              <h2 className="text-4xl font-bold tracking-tight">Reset Password</h2>
              <p className="mt-3 text-zinc-500">Enter your new password below.</p>
            </div>

            {error && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                <p className="font-semibold">Error</p>
                <p className="mt-0.5 text-xs text-red-600">{error}</p>
              </div>
            )}

            {success ? (
              <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center text-green-700">
                <h3 className="text-lg font-semibold">Password Reset Successful!</h3>
                <p className="mt-2 text-sm">
                  Your password has been updated. Redirecting you to sign in...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-zinc-700">
                    New Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-zinc-700">
                    Confirm New Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-xl bg-zinc-950 px-4 py-3.5 font-semibold text-white transition hover:bg-zinc-800 active:scale-[0.99] disabled:opacity-50"
                >
                  {isLoading ? "Updating..." : "Update Password"}
                </button>
              </form>
            )}

            <p className="mt-8 text-center text-sm text-zinc-500">
              Back to{" "}
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

export default ResetPassword;
