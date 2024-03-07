import React, { useState } from "react";
import navlogo from "../assets/img/svg/nav_logo.svg";
import menu from "../assets/img/svg/menu.svg";
import close from "../assets/img/svg/close.svg";
import heroimg from "../assets/img/png/hero_img.png";
import { Location } from "./Icons";
import tajmahal from "../assets/img/svg/tajmahal.svg";
import line from "../assets/img/svg/ongoing_line.svg";
import orangeellips from "../assets/img/svg/orange_ellips.svg";
import aeroplane from "../assets/img/svg/aeroplane.svg";

const Header = () => {
  const [show, setshow] = useState(false);
  if (show === true) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  // const Movement = () => {
  //   setshow(false);
  // };
  return (
    <div>
      <nav className="bg-[#f8f8fd] py-[22.5px] relative z-40 ">
        <div className=" w-[265px] h-[265px] bg-[#5a4dc5] absolute top-0 left-[-75px] rounded-full ellips -z-10"></div>
        <div className="container max-w-[1140px] mx-auto px-3 xl:px-0">
          <div className=" flex items-center justify-between">
            <div className=" z-40">
              <img className=" cursor-pointer" src={navlogo} alt="navlogo" />
            </div>
            <ul
              className={`${
                show ? "left-0" : "left-[-100%]"
              } flex  gap-[42px] z-30 min-h-screen fixed md:min-h-fit md:static w-full md:w-auto items-center justify-center
              top-0 bg-[#f8f8fd] md:bg-[unset]  max-md:w-[100%] max-md:flex-col flex-row max-md:min-h-screen  right-0 ps-0 duration-[350ms] transition-all ease-linear`}
            >
              <li>
                <a
                  href="#home"
                  className="font-normal text-base font-lato text-[#4a4a4c]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="font-normal text-base font-lato text-[#4a4a4c]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  className="font-normal text-base font-lato text-[#4a4a4c]"
                >
                  Packages
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="font-normal text-base font-lato text-[#4a4a4c]"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-normal text-base font-lato text-[#4a4a4c]"
                >
                  Contact Us
                </a>
              </li>
              <button className="font-normal text-base font-lato text-white bg-[linear-gradient(100deg,#8c78ff_-50%,#7b3eff_100%)] py-[9.5px] px-[24px] rounded-[57px]">
                Sign Up
              </button>
            </ul>
            <div
              className=" position-relative z-30 md:hidden  "
              onClick={() => {
                setshow(!show);
              }}
            >
              {show ? <img src={close} alt="#" /> : <img src={menu} alt="#" />}
            </div>
          </div>
        </div>
      </nav>
      <div className="relative">
        <img
          className="absolute right-0 bottom-[10%] hidden lg:block"
          src={aeroplane}
          alt="aeroplane"
        />
        <div className="w-[265px] h-[265px] bg-[#5a4dc5] absolute bottom-0 right-[-100px] rounded-full ellips1 -z-10"></div>
        <div>
          <img
            className="top-[45%] left-11 absolute hidden lg:block"
            src={orangeellips}
            alt="orangeellips"
          />
        </div>
        <div className="container max-w-[1140px] mx-auto px-3 xl:px-0  relative">
          <div>
            <button className="flex items-center font-medium text-[16px] font-lato gap-[6px] py-[9px] px-[17px] shadow-md rounded-[52px] absolute lg:top-[-3%] top-[-13%] sm:top-[-7%]  right-[2%]">
              <Location /> Top Places
            </button>
            <button className="flex items-center font-medium text-[16px] font-lato gap-[6px] py-[9px] px-[17px] shadow-md rounded-[52px] absolute lg:top-[17%] top-[22%] z-20  left-[8%]">
              <Location /> Top Hotels
            </button>
            <div className=" bg-white shadow-md rounded-[12px] hidden lg:block absolute  sm:top-[25%] lg:top-[27%] right-0 pt-3 ps-[15px] pr-[15px] pb-[17px]">
              <div className=" flex gap-[10px]">
                <div>
                  <img src={tajmahal} alt="tajmahal" />
                </div>
                <div>
                  <p className=" font-medium lg:text-[16px] text-[14px] font-lato text-[#666666] mt-2">
                    Ongoing{" "}
                  </p>
                  <p className=" font-medium lg:text-[24px] text-[18px] font-lato text-black">
                    Trip to rome{" "}
                  </p>
                  <p className=" font-medium lg:text-[14px] text-[13px] font-lato text-black mt-1">
                    40% completed
                  </p>
                  <img className=" mt-2" src={line} alt="line" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center lg:text-[85px] text-[32px] sm:text-[60px] md:text-[70p] font-extrabold font-lato text-black leading-[120%] mt-20 ">
            <h1 className="">
              Travel Top <span className="">Destination</span>{" "}
            </h1>
            <p className="text-center lg:text-[85px] text-[32px] sm:text-[60px] md:text-[70p] font-extrabold font-lato text-black leading-[113%] mt-4  ">
              {" "}
              Of The World
            </p>
          </div>

          <div className=" flex justify-center mt-12">
            <img
              className=" max-w-[797px] -z-20 w-full lg:h-[626px]"
              src={heroimg}
              alt="heroimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
