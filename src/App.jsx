/*import background from "./assets/background.jpeg";
import prayIcon from "./assets/pray-icon.svg";
import loveIcon from "./assets/love-icon.svg";
import giveIcon from "./assets/give-icon.svg";
import CarouselCard from "./components/CarouselCard.jsx";*/
import aboutPurposeIcon from "./assets/about-purpose.svg";
import aboutInvolvedIcon from "./assets/about-involved.svg";
import aboutHistoryIcon from "./assets/about-history.svg";
import crossIcon from "./assets/cross-icon.svg";
import pray from "./assets/pray.webp";
import carouselImage from "./assets/carousel/slide-1.svg";
import { Carousel } from "@material-tailwind/react";
import NavbarSimple from "./components/CustomNavbar";
import { Element } from "react-scroll";
import AboutCard from "./components/AboutCard.jsx";
import ScheduleCard from "./components/ScheduleCard.jsx";
import instagramIcon from "./assets/instagram.svg";
import youtubeIcon from "./assets/youtube.svg";
import markerIcon from "./assets/marker.svg";
import logo from "./assets/logo.svg";
import instagramExample from "./assets/instagram-example.png";
import youtubeExample from "./assets/youtube-example.png";
import { useEffect, useRef, useState } from "react";
import MapsEmbed from "./components/MapsEmbed.jsx";
import CuratorWidget from "./components/CuratorWidget.jsx";
import emailjs from "@emailjs/browser";

function App() {
  const [blobDecoration, setBlobDecoration] = useState({
    showImage: true,
    backgroundPosition: "right top, left 0 bottom -600px",
    backgroundSize: "85%, 85%",
    backgroundRepeat: "no-repeat, no-repeat",
  });
  const form = useRef();
  const handleWindowResize = () => {
    if (window.innerWidth >= 960) {
      setBlobDecoration({
        showImage: true,
        backgroundPosition: "right top, left 0 bottom -600px",
        backgroundSize: "85%, 85%",
        backgroundRepeat: "no-repeat, no-repeat",
      });
    } else {
      setBlobDecoration({});
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm("service_siep81q", "template_hbo9ozf", form.current, {
        publicKey: "xX8iaMxq5gAcAraOw",
      })
      .then(
        () => {
          form.current.reset();
        },
        () => {
          console.error("Failed to send email");
        }
      );
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".custom-scroll");
      // const top = document.getElementById("wrapper");
      // console.log(top);
      // // if ( === 300) {
      // //   console.log("on top");
      // //   elements.forEach((element) => {
      // //     element.classList.remove("custom-scroll--show");
      // //   });
      // // }

      elements.forEach((element) => {
        const { top } = element.getBoundingClientRect();

        if (top < 300) {
          element.classList.add("custom-scroll--show");
        }
      });
      /*const windowHeight = window.innerHeight;
      const windowTopPosition =
        window.scrollY || document.documentElement.scrollTop;
      const windowBottomPosition = windowTopPosition + windowHeight;
      const items = document.querySelectorAll(".custom-scroll");

      items.forEach((item) => {
        const itemTopPosition =
          item.getBoundingClientRect().top + windowTopPosition;
        const itemBottomPosition = itemTopPosition + item.offsetHeight;

        if (
          itemBottomPosition >= windowTopPosition &&
          itemTopPosition <= windowBottomPosition
        ) {
          item.classList.add("custom-scroll--show");
        } else {
          item.classList.remove("custom-scroll--show");
        }
      });*/
    };
    handleScroll();

    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("load", handleWindowResize);
    document.getElementById("wrapper").addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("load", handleWindowResize);
      document
        .getElementById("wrapper")
        .removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavbarSimple>
        <Carousel
          className="hidden lg:flex h-full z-10"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-7 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-2 w-2 cursor-pointer rounded-full transition-colors content-[''] ${
                    activeIndex === i ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src={carouselImage}
            className="h-full w-full object-cover"
            alt="Slide 1"
          />
          <img
            src={carouselImage}
            className="h-full w-full object-cover"
            alt="Slide 2"
          />
          <img
            src={carouselImage}
            className="h-full w-full object-cover"
            alt="Slide 3"
          />
        </Carousel>

        <section className="bg-primary pt-[93px] lg:pt-0">
          <div
            className={`w-full h-full ${
              blobDecoration.showImage ? "bg-rect" : ""
            }`}
            style={{
              backgroundPosition: blobDecoration.backgroundPosition,
              backgroundSize: blobDecoration.backgroundSize,
              backgroundRepeat: blobDecoration.backgroundRepeat,
            }}
          >
            <Element
              id="home"
              name="homeElement"
              className="w-full px-10 lg:px-0"
            >
              <div className="flex flex-col-reverse items-center pt-[85px] lg:flex-row lg:justify-between lg:p-[85px]">
                <div className="text-white flex flex-col items-center lg:w-[501px] lg:h-[374px] gap-[29px]">
                  <img src={crossIcon} className="w-auto" alt="Gambar Salib" />
                  <h1 className="font-extrabold text-center text-2xl lg:font-black lg:text-4xl">
                    PRAYER OF THE DAY
                  </h1>
                  <p className="text-center lg:text-justify lg:text-lg">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the{" "}
                    {"industry's "}
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <p className="text-right font-bold text-xl">Roman 8:38-39</p>
                </div>
                <img src={pray} alt="Pray" className="lg:w-4/12 xl:w-5/12" />
              </div>
            </Element>
            <hr className="w-11/12 mx-auto my-16" />
            <Element
              id="about"
              name="aboutElement"
              className="w-full px-5 lg:px-0 custom-scroll"
            >
              <h1 className="text-white text-center font-black text-4xl">
                ABOUT
              </h1>
              <Carousel
                className="py-[85px] lg:hidden"
                autoplay
                loop
                autoplayDelay={4000}
                prevArrow={() => {
                  return null;
                }}
                nextArrow={() => {
                  return null;
                }}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-10 left-2/4 z-10 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                          activeIndex === i ? "bg-white" : "bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                <AboutCard
                  icon={aboutHistoryIcon}
                  title={"OUR HISTORY"}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                />
                <AboutCard
                  icon={aboutInvolvedIcon}
                  title={"GET INVOLVED"}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                />
                <AboutCard
                  icon={aboutPurposeIcon}
                  title={"OUR PURPOSE"}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                />
              </Carousel>
              <div className="hidden lg:flex flex-col lg:flex-row gap-3 lg:gap-0 justify-evenly py-[85px] lg:p-[85px]">
                <AboutCard
                  icon={aboutHistoryIcon}
                  title={"OUR HISTORY"}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                />
                <AboutCard
                  icon={aboutInvolvedIcon}
                  title={"GET INVOLVED"}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                />
                <AboutCard
                  icon={aboutPurposeIcon}
                  title={"OUR PURPOSE"}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                />
              </div>
            </Element>
            <hr className="w-11/12 mx-auto my-16" />
            <Element
              id="schedules"
              name="schedulesElement"
              className="w-full px-5 lg:px-0 custom-scroll"
            >
              <h1 className="text-white text-center font-black text-4xl">
                SCHEDULES
              </h1>
              <Carousel
                className="py-[85px] lg:hidden"
                autoplay
                loop
                autoplayDelay={5000}
                prevArrow={() => {
                  return null;
                }}
                nextArrow={() => {
                  return null;
                }}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-10 left-2/4 z-10 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                          activeIndex === i ? "bg-white" : "bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                <ScheduleCard
                  title={"A PRAYER FOR THE GOD"}
                  description={"Lorem ipsum dolor sit amet, consectetur."}
                  date={"Mon/15th"}
                  time={"08:00"}
                />
                <ScheduleCard
                  title={"A PRAYER FOR THE GOD"}
                  description={"Lorem ipsum dolor sit amet, consectetur."}
                  date={"Mon/15th"}
                  time={"08:00"}
                />
                <ScheduleCard
                  title={"SABBATH SCHOOLS"}
                  description={"Lorem ipsum dolor sit amet, consectetur."}
                  date={"Mon/15th"}
                  time={"08:00"}
                />
              </Carousel>
              <div className="hidden lg:flex flex-col gap-3 lg:gap-0 lg:flex-row justify-evenly py-[85px] lg:p-[85px]">
                <ScheduleCard
                  title={"A PRAYER FOR THE GOD"}
                  description={"Lorem ipsum dolor sit amet, consectetur."}
                  date={"Mon/15th"}
                  time={"08:00"}
                />
                <ScheduleCard
                  title={"A PRAYER FOR THE GOD"}
                  description={"Lorem ipsum dolor sit amet, consectetur."}
                  date={"Mon/15th"}
                  time={"08:00"}
                />
                <ScheduleCard
                  title={"SABBATH SCHOOLS"}
                  description={"Lorem ipsum dolor sit amet, consectetur."}
                  date={"Mon/15th"}
                  time={"08:00"}
                />
              </div>
            </Element>
            <hr className="w-11/12 mx-auto mt-16 invisible" />
          </div>

          <Element
            id="social-media"
            name="socialMediaElement"
            className="w-full"
          >
            <div className="bg-secondary pt-16 custom-scroll">
              <h1 className="text-white text-center font-black text-4xl">
                Follow us on Instagram
              </h1>
              <h2 className="text-white text-center my-3">
                <img
                  className="inline"
                  src={instagramIcon}
                  alt="Instagram Icon"
                />{" "}
                @hangtuah.sdac
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center items-center lg:grid-cols-5 gap-3 px-10 pt-16 pb-[85px] lg:py-[85px] lg:px-[200px]">
                {/*{Array.from({ length: 15 }).map((_, index) => (*/}
                {/*  <img*/}
                {/*    key={index}*/}
                {/*    src={instagramExample}*/}
                {/*    className="w-full"*/}
                {/*    alt="Contoh Instagram"*/}
                {/*  />*/}
                {/*))}*/}
                {/*<button className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5 border border-white w-full p-5 text-white font-bold hover:bg-white hover:text-black transition duration-500">*/}
                {/*  SEE MORE*/}
                {/*</button>*/}
                <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5 w-full h-auto">
                  <CuratorWidget
                    feedId={"edc6ee7a-cbe2-4f46-892e-4b9bfa47fabe"}
                  />
                </div>
              </div>
            </div>
            <div className="bg-primary pt-16 custom-scroll">
              <h1 className="text-white text-center font-black text-4xl">
                Subscribe to our Youtube Channel
              </h1>
              <h2 className="text-white text-center my-3">
                <img className="inline" src={youtubeIcon} alt="Youtube Icon" />{" "}
                Hang Tuah SDAC
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center items-center lg:grid-cols-3 gap-3 px-10 pt-16 pb-[85px] lg:py-[85px] lg:px-[200px]">
                {/*{Array.from({ length: 6 }).map((_, index) => (*/}
                {/*  <img*/}
                {/*    key={index}*/}
                {/*    src={youtubeExample}*/}
                {/*    className="w-full"*/}
                {/*    alt="Contoh Youtube"*/}
                {/*  />*/}
                {/*))}*/}
                <div className="col-span-1 sm:col-span-2 lg:col-span-3 w-full h-auto">
                  <CuratorWidget
                    feedId={"3033c4e6-5030-458c-9b18-352ce6f6da1f"}
                  />
                </div>
                {/*<button className="col-span-1 sm:col-span-2 lg:col-span-3 border border-white w-full p-5 text-white font-bold hover:bg-white hover:text-black transition duration-500">*/}
                {/*  SEE MORE*/}
                {/*</button>*/}
              </div>
            </div>
            <div className="bg-secondary pt-16 custom-scroll">
              <h1 className="text-white text-center font-black text-4xl">
                JOIN US
              </h1>
              <h2 className="text-white text-center my-3">
                <img className="inline" src={markerIcon} alt="Point Icon" /> (In
                Front of Hanamasa) 7th Day Advent Masehi Church
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center items-center lg:grid-cols-5 gap-3 px-10 pt-16 pb-[85px] lg:py-[85px] lg:px-[200px]">
                <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5 w-full h-[500px]">
                  <MapsEmbed />
                </div>

                <a
                  href="https://maps.app.goo.gl/jw77Fdft6x2SYe1M8"
                  className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5 border border-white w-full p-5 text-white font-bold hover:bg-white text-center hover:text-black transition duration-500"
                >
                  CHECK ON MAPS
                </a>
              </div>
            </div>
          </Element>

          <footer className="px-10 bg-ternary text-white lg:px-20 xl:px-[252px] pt-[96px] pb-14 lg:gap-[96px]">
            <div className="flex flex-col-reverse lg:flex-row justify-between">
              <div className="flex flex-col lg:w-[363px]">
                <img src={logo} alt="Adventist logo" className="my-4 w-40" />
                <h3 className="text-[22px] font-bold leading-[33px] tracking-wider text-left py-5">
                  ADDRESS
                </h3>
                <p className="font-archivo text-base leading-[34px] text-left">
                  Jl. Drupadi No.44, Panjer, Kec. Denpasar Tim., Kota Denpasar,
                  Bali 80234
                </p>

                <h3 className="text-[22px] font-bold leading-[33px] tracking-wider text-left py-5">
                  CONTACT
                </h3>
                <p className="font-archivo text-base leading-[34px] text-left">
                  (123) 321-4878
                </p>
                <p className="font-archivo text-base leading-[34px] text-left">
                  info@contact.com
                </p>
              </div>
              <div className="flex flex-col lg:w-[368px] pb-10 lg:pb-0">
                <h1 className="text-[22px] font-bold leading-[33px] tracking-wider text-left py-5">
                  DROP US A LETTER
                </h1>
                <h3 className="mb-7">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, consequatur?
                </h3>
                <form ref={form} onSubmit={sendEmail}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="user_name"
                    className="w-full p-2 my-2 rounded-lg bg-form-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="user_email"
                    className="w-full p-2 my-2 rounded-lg bg-form-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    cols="30"
                    rows="10"
                    style={{
                      resize: "none",
                    }}
                    name="message"
                    className="w-full p-2 my-2 rounded-lg bg-form-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                  <input
                    type="hidden"
                    name="to_name"
                    value="Adventist Bali Website"
                  />
                  <input
                    type="hidden"
                    name="owner_name"
                    value="Adventist Bali "
                  />
                  <button
                    type="submit"
                    className="border-2 border-solid border-red-600 w-[146px] h-[46px] px-[48px] gap-[10px] rounded-lg text-red-600 font-bold"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
            <h1 className="text-center mt-16 lg:mt-36 font-light text-lg">
              © 2024- AdventistBali
            </h1>
          </footer>
        </section>
      </NavbarSimple>
    </>
  );
}

export default App;
