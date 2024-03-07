import React from "react";
import video from "../assets/img/png/watch_video.png";
import orangeellips from "../assets/img/svg/orange_ellips.svg";

const WatchVideo = () => {
  return (
    <div className=" relative pb-[60px]">
      <div>
        <img
          className=" top-4 left-11 absolute hidden lg:block"
          src={orangeellips}
          alt="orangeellips"
        />
      </div>
      <div className="container max-w-[1140px] mx-auto px-3 ">
        <div className=" text-center lg:mt-[60px] mt-12">
          <h2 className=" font-extrabold lg:text-[50px] text-[34px] md:text-[40px] font-lato leading-[120%] ">
            Watch Video
          </h2>
          <p className="font-normal text-[16px] font-lato text-[#4d4d4d] mt-[10px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
            <span className=" block">
              suffered alteration in some form, by injected humour.
            </span>
          </p>
        </div>
        <div>
          <img
            className=" w-full rounded-[10px] mt-[45px] "
            src={video}
            alt="video"
          />
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
