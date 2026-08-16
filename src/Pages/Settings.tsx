import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/Theme/useTheme";

const Settings = () => {
  const {theme, setTheme} = useTheme();

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your application preferences.
          </p>
        </div>

        <section className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 px-6 py-4">
            <h2 className="font-medium text-gray-900">Preferences</h2>

            <p className="mt-1 text-sm text-gray-500">
              Customize how the application looks.
            </p>
          </div>

          <div className="flex items-center justify-between px-6 py-5">
            <div>
              <p className="text-sm font-medium text-gray-900">Theme</p>

              <p className="mt-1 text-sm text-gray-500">
                Choose your preferred appearance.
              </p>
            </div>

            <div className="relative">
              <select
                value={theme}
                onChange={(event) => setTheme(event.target.value as "light"| "dark" | "system")}
                name="theme"
                className="
                    w-32
                    appearance-none
                    rounded-lg
                    border border-gray-300
                    bg-white
                    px-3 py-2 pr-8
                    text-sm text-gray-700
                    outline-none
                    transition
                    focus:border-gray-500
                    focus:ring-2
                    focus:ring-gray-200
                    "
              >
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="system">System</option>
              </select>

              <FontAwesomeIcon
                icon={faChevronDown}
                className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-xs
                    text-gray-500
                    "
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Settings;
