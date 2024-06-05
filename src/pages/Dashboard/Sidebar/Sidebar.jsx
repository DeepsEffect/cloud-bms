import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Button,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Card className="lg:h-[calc(100vh-2rem)] w-full max-w-[20rem] lg:p-4 shadow-xl shadow-blue-gray-900/5">
      <Link to={"/"} className="mb-2 p-4">
        <Button size="sm" className="font-bold bg-transparent text-text-50">
          Home
        </Button>
      </Link>

      <List>
        {/* <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem> */}

        <NavLink
          to={"myProfile"}
          className={({ isActive }) =>
            isActive
              ? "text-text-50 font-semibold bg-primary-500 rounded-lg hover:bg-primary-600"
              : "font-semibold text-text-50"
          }
        >
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            My Profile
          </ListItem>
        </NavLink>

        <NavLink
          to={"announcement"}
          className={({ isActive }) =>
            isActive
              ? "text-text-50 font-semibold bg-primary-500 rounded-lg hover:bg-primary-600"
              : "font-semibold text-text-50"
          }
        >
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Announcement
            <ListItemSuffix>
              <Chip
                value="0"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
        </NavLink>

        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
};

export default Sidebar;
