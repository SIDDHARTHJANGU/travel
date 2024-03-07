import React from "react";
import { Booking, Choices } from "./Icons";
import valueleftplane from "../assets/img/svg/top_value_left_plane.svg";
import valuerightplane from "../assets/img/svg/top-value_right_plane.svg";

const TopValues = () => {
  return (
    <div className="relative z-40">
      <div className="container max-w-[1140px] mx-auto px-3 ">
        <div>
          <img
            className=" absolute top-0 left-0 -z-10"
            src={valueleftplane}
            alt="valueleftplane"
          />
          <img
            className=" absolute lg:bottom-[-50%] bottom-[-11%] right-0 -z-10"
            src={valuerightplane}
            alt="valuerightplane"
          />
        </div>
        <div className=" text-center lg:mt-[60px] mt-7">
          <h2 className=" font-extrabold lg:text-[50px] text-[34px] md:text-[40px] font-lato leading-[120%]">
            Top Values For YOU
          </h2>
          <p className=" font-normal text-[16px] font-lato text-[#4d4d4d] mt-[15px]">
            Maecenas leo sit fringilla sit urna odio nunc sed. Tellus egestas
            mus tincidunt{" "}
            <span className=" lg:block">
              lorem ornare parturient sollicitudin nunc orci.
            </span>
          </p>
        </div>
        <div className=" flex flex-wrap  lg:justify-between justify-center gap-6 lg:gap-0 lg:mt-[50px] mt-6 lg:pb-[60px] pb-5">
          <div className="lg:w-[32%] md:w-[48%] sm:w-[70%]">
            <div className=" rounded-[10px] py-8 px-5 border-[#ebe7ff] border-[1px] ">
              <Choices />
              <p className=" font-bold text-[24px] font-lato leading-[120%] mt-[10px]">
                Lot of choices
              </p>
              <p className=" font-normal text-[16px] font-lato leading-[160%] mt-[10px] ">
                Lorem Ipsum is simply dummy text of the
                <span className=" xl:block">
                  printing and typesetting industry.
                </span>
              </p>
            </div>
          </div>
          <div className="lg:w-[32%] md:w-[48%] sm:w-[70%]">
            <div className="border-[#ebe7ff] border-[1px] rounded-[10px] py-8 px-5">
              <Booking />
              <p className=" font-bold text-[24px] font-lato leading-[120%] mt-[10px]">
                Best Tour Guide
              </p>
              <p className=" font-normal text-[16px] font-lato leading-[160%] mt-[10px] ">
                Lorem Ipsum is simply dummy text of the
                <span className=" xl:block">
                  printing and typesetting industry.
                </span>
              </p>
            </div>
          </div>
          <div className="lg:w-[32%] md:w-[48%] sm:w-[70%]">
            <div className="border-[#ebe7ff] border-[1px] rounded-[10px] py-8 px-5">
              <Booking />
              <p className=" font-bold text-[24px] font-lato leading-[120%] mt-[10px]">
                Easy Booking
              </p>
              <p className=" font-normal text-[16px] font-lato leading-[160%] mt-[10px] ">
                Lorem Ipsum is simply dummy text of the
                <span className=" xl:block">
                  printing and typesetting industry.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopValues;
