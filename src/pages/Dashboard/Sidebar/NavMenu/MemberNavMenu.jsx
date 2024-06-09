import {
  CreditCardIcon,
  InboxIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Chip,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
} from "@material-tailwind/react";
import { FaHistory } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAnnouncement from "../../../../hooks/useAnnouncement";

const MemberNavMenu = () => {
  const [announcement] = useAnnouncement();
  return (
    <>
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
      {/* make payment */}
      <NavLink
        to={"makePayment"}
        className={({ isActive }) =>
          isActive
            ? "text-text-50 font-semibold bg-primary-500 rounded-lg hover:bg-primary-600"
            : "font-semibold text-text-50"
        }
      >
        <ListItem>
          <ListItemPrefix>
            <CreditCardIcon className="h-5 w-5" />
          </ListItemPrefix>
          Make Payment
        </ListItem>
      </NavLink>
      {/* payment history */}
      <NavLink
        to={"paymentHistory"}
        className={({ isActive }) =>
          isActive
            ? "text-text-50 font-semibold bg-primary-500 rounded-lg hover:bg-primary-600"
            : "font-semibold text-text-50"
        }
      >
        <ListItem>
          <ListItemPrefix>
            <FaHistory className="h-5 w-5" />
          </ListItemPrefix>
          Payment History
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
              value={announcement?.length}
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

export default MemberNavMenu;
