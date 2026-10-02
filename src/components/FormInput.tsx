import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface FormInput {
  email: string;
  password: string;
  setEmail?: (value: string) => void;
  setPassword?: (value: string) => void;
}

const FormInput = ({ email, password, setEmail, setPassword }: FormInput) => {
  const intl = useIntl();
  const [showPassword, setShowPassword] = useState(false);
  
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
          onChange={(event) => setEmail?.(event.target.value)}
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

        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword?.(event.target.value)}
            placeholder="••••••••"
            autoComplete="current-password"
            className="w-full rounded-xl border border-zinc-200 px-4 py-3.5 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-4 focus:ring-zinc-100"
            required
          />

          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2"
            onClick={()=> setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash}/>}
          </button>
        </div>
      </div>
    </>
  );
};

export default FormInput;
