import React from "react";
import { Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.svg";

function NavList() {
  return (
    <ul className="flex flex-col bg-white gap-2 lg:gap-[43px] lg:bg-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <a href="#">
        <li className="text-black lg:text-white">Home</li>
      </a>
      <a href="#">
        <li className="text-black lg:text-white">About</li>
      </a>
      <a href="#">
        <li className="text-black lg:text-white">Schedules</li>
      </a>
      <a href="#">
        <li className="text-black lg:text-white">Social Media</li>
      </a>
    </ul>
  );
}

export default function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className="max-w-full h-[59px] px-[15px] py-[8px] lg:px-[55px] lg:py-[35px] lg:h-[137px] w-screen absolute">
      <div className="flex items-center justify-between text-blue-gray-900">
        <img src={logo} alt="Adventist logo" />
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
    </nav>
  );
}
