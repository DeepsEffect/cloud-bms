/* eslint-disable react/prop-types */
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Button,
  Spinner,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaPowerOff, FaTimes } from "react-icons/fa";
import UserNavMenu from "./NavMenu/UserNavMenu";
import MemberNavMenu from "./NavMenu/MemberNavMenu";
import AdminNavMenu from "./NavMenu/AdminNavMenu";
import useRole from "../../../hooks/useRole";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [role, isLoading, refetch] = useRole();
  const { user, loading, logOut } = useAuth();

  useEffect(() => {
    if (user) {
      refetch();
    }
  }, [user, refetch]);

  if (isLoading || loading) {
    return <Spinner />;
  }

  return (
    <>
      {/* Sidebar overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-black bg-opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}

      <Card
        className={`fixed top-0 left-0 z-50 h-screen w-64 lg:w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:flex lg:h-[calc(100vh-2rem)] overflow-y-auto bg-white`}
      >
        <div className="flex justify-between items-center mb-2">
          <Link to={"/"} className="p-4">
            <Button size="sm" className="font-bold bg-transparent text-text-50">
              Home
            </Button>
          </Link>
          {/* Close icon for mobile */}
          <FaTimes
            className="text-xl cursor-pointer lg:hidden"
            onClick={toggleSidebar}
          />
        </div>

        <List>
          {role === "user" && (
            <UserNavMenu isLoading={isLoading} loading={loading} />
          )}
          {role === "member" && <MemberNavMenu />}
          {role === "admin" && <AdminNavMenu />}
          <hr />
          <ListItem onClick={logOut} className="font-bold">
            <ListItemPrefix>
              <FaPowerOff className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </>
  );
};

export default Sidebar;
