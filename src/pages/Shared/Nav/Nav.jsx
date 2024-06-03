import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ButtonPrimary from "../../../components/Buttons/ButtonPrimary";
function NavList() {
  return (
    <ul className="font-body text-text-50 text-md font-semibold my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NavLink to={"/"} className="p-1 font-medium">
        <p className="flex items-center hover:text-primary-500 transition-colors">
          Home
        </p>
      </NavLink>
      <NavLink to={"/apartments"} className="p-1 font-medium">
        <p className="flex items-center hover:text-primary-500 transition-colors">
          Apartments
        </p>
      </NavLink>
      <NavLink to={"/login"} className="p-1 font-medium">
        <ButtonPrimary content={"login"} size={"sm"} />
      </NavLink>
    </ul>
  );
}

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <Navbar className="mx-auto container px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <NavLink
          to={"/"}
          className="mr-4 cursor-pointer py-1.5 font-heading font-bold text-xl"
        >
          Cloud-MBS
        </NavLink>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};
export default Nav;
