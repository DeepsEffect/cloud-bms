import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="relative font-body">
      {/* Menu icon for mobile */}
      <div className="lg:hidden absolute top-4 left-4 z-50">
        <FaBars className="text-2xl cursor-pointer" onClick={toggleSidebar} />
      </div>

      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 lg:pl-[20rem]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
