import background from "./assets/background.jpeg";
import { Carousel, Typography } from "@material-tailwind/react";
import NavbarSimple from "./components/CustomNavbar";

function App() {
  return (
    <>
      {/*<nav className="w-screen flex flex-row justify-between items-center absolute px-[55px] py-[35px] h-[137px]">
        <img src={logo} alt="Adventist logo" />
        <ul className="inline-flex gap-[43px]">
          <a href="#">
            <li className="text-white">Home</li>
          </a>
          <a href="#">
            <li className="text-white">About</li>
          </a>
          <a href="#">
            <li className="text-white">Schedules</li>
          </a>
          <a href="#">
            <li className="text-white">Social Media</li>
          </a>
        </ul>
      </nav>*/}
      <NavbarSimple />
      <Carousel
        className="hidden lg:block h-[724px] -z-10"
        autoplay
        autoplayDelay={3000}
      >
        <div className="relative h-full w-full">
          <img
            src={background}
            alt="image 1"
            className="h-full w-full object-cover object-bottom"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default App;
