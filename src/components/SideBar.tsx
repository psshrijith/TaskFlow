import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
import {
  faBars,
  faCircleUser,
  faGear,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";

type NavItemProps = {
  to: string;
  icon: IconDefinition;
  label: string;
  isCollapsed: boolean;
};

const NavItem = ({
  to,
  icon,
  label,
  isCollapsed,
}: NavItemProps) => {
  return (
    <NavLink
      to={to}
      title={isCollapsed ? label : undefined}
      className={({ isActive }) =>
        `
        group relative flex items-center rounded-xl
        px-3 py-3
        transition-all duration-200
        ${
          isActive
            ? "bg-white/10 text-white shadow-sm"
            : "text-gray-400 hover:bg-white/5 hover:text-white"
        }
        ${isCollapsed ? "justify-center" : "gap-3"}
        `
      }
    >
      <FontAwesomeIcon
        icon={icon}
        className="w-5 shrink-0 transition-transform duration-200 group-hover:scale-105"
      />

      {!isCollapsed && (
        <span className="text-sm font-medium">
          {label}
        </span>
      )}
    </NavLink>
  );
};

const navItems = [
  {
    to: "/dashboard",
    icon: faHouse,
    label: "Dashboard",
  },
  {
    to: "/user",
    icon: faCircleUser,
    label: "User",
  },
  {
    to: "/settings",
    icon: faGear,
    label: "Settings",
  },
];

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <aside
      className={`
        fixed left-0 top-0 z-40
        flex h-screen flex-col
        border-r border-white/1 text-white
        shadow-2xl
        transition-all duration-300 ease-in-out
        bg-linear-to-b from-black via-zinc-950 to-zinc-900
        ${isCollapsed ? "w-16" : "w-64"}
      `}
    >
      <div
        className={`
          flex h-16 shrink-0 items-center
          border-b border-white/10
          px-3
          ${isCollapsed ? "justify-center" : "justify-between"}
        `}
      >
        {!isCollapsed && (
            <NavLink to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-gray-950">
              <FontAwesomeIcon icon={faHouse} />
            </div>

            <span className="text-base font-semibold tracking-tight">
              TaskFlow
            </span>
            </NavLink>
        )}

        <button
          type="button"
          onClick={() => setIsCollapsed((prev) => !prev)}
          className="
            flex h-10 w-10 shrink-0
            items-center justify-center
            rounded-xl
            text-gray-400
            transition-all duration-200
            hover:bg-white/10
            hover:text-white
            active:scale-95
          "
          aria-label={
            isCollapsed
              ? "Expand sidebar"
              : "Collapse sidebar"
          }
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <nav className="flex-1 space-y-1 px-2 py-5">
        {navItems.map((navItem) => (
          <NavItem
            key={navItem.to}
            to={navItem.to}
            icon={navItem.icon}
            label={navItem.label}
            isCollapsed={isCollapsed}
          />
        ))}
      </nav>

      <div className="border-t border-white/10 p-2">
        <NavItem
          to="/profile"
          icon={faCircleUser}
          label="Profile"
          isCollapsed={isCollapsed}
        />
      </div>
    </aside>
  );
};

export default SideBar;