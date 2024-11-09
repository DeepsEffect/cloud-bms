/* eslint-disable react/prop-types */
import { InboxIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import {
  Chip,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Spinner,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import useAnnouncement from "../../../../hooks/useAnnouncement";

const UserNavMenu = ({ isLoading, loading }) => {
  const [announcements] = useAnnouncement();

  if (isLoading || loading) {
    return <Spinner />;
  }
  return (
    <>
      <NavLink
        to={"myProfile"}
        className={({ isActive }) =>
          isActive
            ? "text-text-50 font-semibold bg-primary-200 rounded-lg hover:bg-primary-600"
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
            ? "text-text-50 font-semibold bg-primary-200 rounded-lg hover:bg-primary-600"
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
              value={announcements.length}
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
      </NavLink>
    </>
  );
};

export default UserNavMenu;
