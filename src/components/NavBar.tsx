import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex w-full items-start justify-between border-b border-red-100 px-10 text-white">
      <div className="flex gap-4">
        <p className="p-3 text-3xl text-white">
          <FormattedMessage id="landing.title" />
        </p>
        <ul className="flex items-center gap-6 rounded-lg p-3">
          <li>
            <FormattedMessage id="navbar.product" />
          </li>

          <li>
            <FormattedMessage id="navbar.resources" />
          </li>

          <li>
            <Link
              to="/signup"
              className="rounded-lg bg-white px-3 py-2 text-black"
            >
              <FormattedMessage id="navbar.signup" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
