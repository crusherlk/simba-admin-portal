import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
function Layout() {
  return (
    <div className="flex h-screen overflow-x-hidden">
      <Sidebar />
      <div className="flex-1 ml-60">
        <div className="">{<Header />}</div>
        <div className="p-4 mb-4">{<Outlet />}</div>
      </div>
    </div>
  );
}
export default Layout;
