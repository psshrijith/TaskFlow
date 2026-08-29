import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";

const FormInput = () => {
  const intl = useIntl();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          <FormattedMessage id="signin.emailLabel" />
        </label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={intl.formatMessage({ id: "signup.emailPlaceholder" })}
          aria-label={intl.formatMessage({ id: "signin.emailLabel" })}
          autoComplete="email"
          className="w-full rounded-xl border border-zinc-200 px-4 py-3.5 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-4 focus:ring-zinc-100"
          required
        />
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="password" className="text-sm font-medium">
            <FormattedMessage id="signin.passwordLabel" />
          </label>

          <Link
            to="/forgot-password"
            className="text-xs font-medium text-zinc-500 transition hover:text-zinc-900 hover:underline"
          >
            <FormattedMessage id="signin.forgotPassword" />
          </Link>
        </div>

        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="••••••••"
          autoComplete="current-password"
          className="w-full rounded-xl border border-zinc-200 px-4 py-3.5 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-4 focus:ring-zinc-100"
          required
        />
      </div>
    </>
  );
};

export default FormInput;
