import React from "react";
import { Collapse, IconButton, Navbar } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.svg";

function NavList() {
  const handleClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      document.getElementById("wrapper").scrollTo({
        top: targetElement.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };

  return (
    <ul className="flex flex-col gap-2 my-2 lg:gap-[43px] lg:bg-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <a href="#home" onClick={handleClick}>
        <li className="p-2 text-white">Home</li>
      </a>
      <a href="#about" onClick={handleClick}>
        <li className="p-2 text-white">About</li>
      </a>
      <a href="#schedules" onClick={handleClick}>
        <li className="p-2 text-white">Schedules</li>
      </a>
      <a href="#social-media" onClick={handleClick}>
        <li className="p-2 text-white">Social Media</li>
      </a>
    </ul>
  );
}

export default function NavbarSimple({ children }) {
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
    <div id="wrapper" className="absolute w-full h-full overflow-y-scroll">
      <Navbar
        className="sticky top-2 mx-auto max-w-91-percent-plus-50-px shadow-lg shadow-black/30 bg-black rounded-[50px] border-none z-20"
        color={openNav ? "transparent" : "transparent"}
      >
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
              <XMarkIcon className="h-6 w-6 text-white" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
      <div className="absolute top-0 w-full">{children}</div>
    </div>
  );
}
