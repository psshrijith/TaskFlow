import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const CollapsedState = () => {
  return (
    <nav className="space-y-2 flex flex-col w-12 bg-red-100 h-screen p-8 items-center ">
      <FontAwesomeIcon icon={faBars} size="lg"/>
      <FontAwesomeIcon icon={faCircleUser} />
      <FontAwesomeIcon icon={faGear} />
    </nav>
  );
};

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
   
      <nav className="space-y-2">
        <button
          type="button"
          onClick={()=> setIsCollapsed(!isCollapsed)}
          className="m-3 flex h-10 w-10 rounded-lg hover:bg-white/10" 
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {isCollapsed ? (
          <CollapsedState />
        ) : (
           <aside className="w-64 h-screen bg-gray-900 text-white p-4">
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800">
              Dashboard
            </a>

            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800">
              Profile
            </a>

            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800">
              Settings
            </a>
          </aside>
        )}
      </nav>
  );
};

export default SideBar;
