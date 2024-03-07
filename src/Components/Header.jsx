import React, { useState } from "react";
import navlogo from "../assets/img/svg/nav_logo.svg";
import menu from "../assets/img/svg/menu.svg";
import close from "../assets/img/svg/close.svg";

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
      <nav className=" bg-[#f8f8fd] py-[22.5px] ">
        <div className="container max-w-[1140px] mx-auto px-3">
          <div className=" flex items-center justify-between">
            <div className=" z-40">
              <img src={navlogo} alt="navlogo" />
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
              <button className="font-normal text-base font-lato text-white bg-[#8369f8] py-[9.5px] px-[24px] rounded-[57px]">
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
    </div>
  );
};

export default Header;
