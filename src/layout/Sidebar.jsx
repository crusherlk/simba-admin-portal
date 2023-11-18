import { IoLogoOctocat } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../constants/settings";

function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className="fixed h-full flex flex-col bg-gray-900 w-60 p-4 text-white">
      {/* logo */}
      <div className="flex items-center gap-2 px-2 py-4">
        <IoLogoOctocat fontSize={24} />
        <span className="text-gray-100 text-lg">Simba</span>
      </div>
      {/* main nav */}
      <div className="flex-1 py-8 flex flex-col gap-1">
        {DASHBOARD_SIDEBAR_LINKS.map((item, idx) => (
          <Link
            className={`flex items-center gap-2 p-2 hover:bg-gray-700 active:bg-gray-600 rounded ${
              pathname === item.path
                ? "text-white bg-gray-700"
                : "text-gray-400"
            }`}
            key={idx}
            to={item.path}
          >
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>
      {/* bottm nav */}
      <div className="flex flex-col gap-1 pt-2 border-t border-gray-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item, idx) => (
          <Link
            className={`flex items-center gap-2 p-2 hover:bg-gray-700 active:bg-gray-600 rounded ${
              pathname === item.path
                ? "text-white bg-gray-700"
                : "text-gray-400"
            }`}
            key={idx}
            to={"/"}
          >
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </Link>
        ))}

        <Link
          className={`flex items-center gap-2 p-2 text-red-500 hover:bg-gray-700 active:bg-gray-600 rounded cursor-poiner`}
          to={"/login"}
        >
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Sign Out
        </Link>
      </div>
    </div>
  );
}
export default Sidebar;
