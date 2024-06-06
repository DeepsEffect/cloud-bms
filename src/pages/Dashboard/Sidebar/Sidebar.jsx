import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import UserNavMenu from "./NavMenu/UserNavMenu";
import MemberNavMenu from "./NavMenu/MemberNavMenu";
import AdminNavMenu from "./NavMenu/AdminNavMenu";
import { FaPowerOff } from "react-icons/fa";

const Sidebar = () => {
  const user = true;
  const member = false;
  const admin = false;
  return (
    <Card className="lg:h-[calc(100vh-2rem)] w-full max-w-[20rem] lg:p-4 shadow-xl shadow-blue-gray-900/5">
      <Link to={"/"} className="mb-2 p-4">
        <Button size="sm" className="font-bold bg-transparent text-text-50">
          Home
        </Button>
      </Link>

      <List>
        {user && <UserNavMenu />}
        {member && <MemberNavMenu />}
        {admin && <AdminNavMenu />}
        <hr />
        <ListItem className="font-bold">
          <ListItemPrefix>
            <FaPowerOff className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
};

export default Sidebar;
