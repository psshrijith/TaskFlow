import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/Theme/useTheme";
import SideBar from "../components/SideBar";
import Dropdown from "../components/DropDown";

const themeOptions = [
  { label: "Dark", value: "dark" },
  { label: "Light", value: "light" },
  { label: "System", value: "system" },
];

const Settings = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <SideBar />

      <main className="min-h-screen flex-1 bg-[radial-gradient(circle_at_top_right,rgba(63,63,70,0.2),transparent_35%)] px-4 py-8 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300">
              <FontAwesomeIcon icon={faGear} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Workspace
              </p>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight text-white">
                Settings
              </h1>
            </div>
          </div>

          <section className="rounded-2xl border border-white/10 bg-white/3 shadow-[0_24px_80px_rgba(0,0,0,0.2)]">
            <div className="border-b border-white/10 px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPalette} className="text-gray-400" />
                <div>
                  <h2 className="font-medium text-white">Appearance</h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Customize how TaskFlow looks on your device.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div>
                <p className="mt-1 text-sm text-gray-500">
                  Choose your preferred appearance.
                </p>
              </div>

              <div className="w-full sm:w-40">
                <Dropdown
                  label="Theme"
                  value={theme}
                  options={themeOptions}
                  onChange={(value) =>
                    setTheme(value as "light" | "dark" | "system")
                  }
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Settings;
