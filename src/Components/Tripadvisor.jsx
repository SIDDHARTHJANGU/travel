import React from "react";
import Marquee from "react-fast-marquee";
import tripadvisor from "../assets/img/svg/tripadvisor.svg";
import expedia from "../assets/img/svg/expedia.svg";
import booking from "../assets/img/svg/booking.svg";
import airbnb from "../assets/img/svg/airbnb.svg";
import rbitz from "../assets/img/svg/rbitz.svg";

const Tripadvisor = () => {
  return (
    <div>
      <div className=" container max-w-[1140px] mx-auto px-3 lg:px-0 ">
        <Marquee className=" pt-[100px] pb-[58px]">
          <div>
            <img
              className="mx-9 sm:mx-10 md:mx-12 lg:mx-14"
              src={tripadvisor}
              alt="tripadvisor"
            />
          </div>
          <div>
            <img
              className=" mx-9 sm:mx-10 md:mx-12 lg:mx-14"
              src={expedia}
              alt="expedia"
            />
          </div>
          <div>
            <img
              className=" mx-9 sm:mx-10 md:mx-12 lg:mx-14"
              src={booking}
              alt="booking"
            />
          </div>
          <div>
            <img
              className=" mx-9 sm:mx-10 md:mx-12 lg:mx-14"
              src={airbnb}
              alt="airbnb"
            />
          </div>
          <div>
            <img
              className=" mx-9 sm:mx-10 md:mx-12 lg:mx-14"
              src={rbitz}
              alt="rbitz"
            />
          </div>
          <div>
            <img
              className=" mx-9 sm:mx-10 md:mx-12 lg:mx-14"
              src={tripadvisor}
              alt="tripadvisor"
            />
          </div>
          <div>
            <img
              className=" mx-9 sm:mx-10 md:mx-12 lg:mx-14"
              src={expedia}
              alt="expedia"
            />
          </div>
          <div>
            <img
              className=" mx-9 sm:mx-10 md:mx-12 lg:mx-14"
              src={booking}
              alt="booking"
            />
          </div>
          <div>
            <img
              className=" mx-9 sm:mx-10 md:mx-12 lg:mx-14"
              src={airbnb}
              alt="airbnb"
            />
          </div>
          <div>
            <img
              className=" mx-9 sm:mx-10 md:mx-12 lg:mx-14"
              src={rbitz}
              alt="rbitz"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Tripadvisor;
