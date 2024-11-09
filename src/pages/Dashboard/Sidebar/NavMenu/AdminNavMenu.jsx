import { UserCircleIcon } from "@heroicons/react/24/solid";
import { ListItem, ListItemPrefix } from "@material-tailwind/react";
import { FaUsers } from "react-icons/fa";
import { IoMegaphone } from "react-icons/io5";
import { MdRequestQuote } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const AdminNavMenu = () => {
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
          Admin Profile
        </ListItem>
      </NavLink>
      {/* manage users*/}
      <NavLink
        to={"manageMembers"}
        className={({ isActive }) =>
          isActive
            ? "text-text-50 font-semibold bg-primary-200 rounded-lg hover:bg-primary-600"
            : "font-semibold text-text-50"
        }
      >
        <ListItem>
          <ListItemPrefix>
            <FaUsers className="h-5 w-5" />
          </ListItemPrefix>
          Manage Members
        </ListItem>
      </NavLink>
      {/* make announcement */}
      <NavLink
        to={"makeAnnouncement"}
        className={({ isActive }) =>
          isActive
            ? "text-text-50 font-semibold bg-primary-200 rounded-lg hover:bg-primary-600"
            : "font-semibold text-text-50"
        }
      >
        <ListItem>
          <ListItemPrefix>
            <IoMegaphone className="h-5 w-5" />
          </ListItemPrefix>
          Make Announcement
        </ListItem>
      </NavLink>
      {/* agreement requests */}
      <NavLink
        to={"agreementRequest"}
        className={({ isActive }) =>
          isActive
            ? "text-text-50 font-semibold bg-primary-200 rounded-lg hover:bg-primary-600 "
            : "font-semibold text-text-50"
        }
      >
        <ListItem>
          <ListItemPrefix>
            <MdRequestQuote className="h-5 w-5" />
          </ListItemPrefix>
          Agreement Requests
        </ListItem>
      </NavLink>
      {/* manage coupons */}
      <NavLink
        to={"manageCoupons"}
        className={({ isActive }) =>
          isActive
            ? "text-text-50 font-semibold bg-primary-200 rounded-lg hover:bg-primary-600"
            : "font-semibold text-text-50"
        }
      >
        <ListItem>
          <ListItemPrefix>
            <RiCoupon2Fill className="h-5 w-5" />
          </ListItemPrefix>
          Manage Coupons
        </ListItem>
      </NavLink>
    </>
  );
};

export default AdminNavMenu;
