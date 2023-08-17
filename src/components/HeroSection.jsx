import React from "react";
import styles from "../style";
import GetStarted from "./GetStarted";
import { discount, robot } from "../assets";

const HeroSection = () => {
  return (
    <section
      className={`flex ${styles.paddingY} sm:flex-row  flex-col py-4 md:px-[100px] sm:px-[20px] px-[10px] ml-4`}
    >
      <div
        className={`${styles.flexStart}flex-1 flex-col px-2 py-4 flex-start`}
      >
        <div
          className={`flex flex-row bg-discount-gradient rounded-[10px] items-center  w-[300px] mb-2`}
        >
          <img src={discount} className={`px-2 my-1 h-[40px] w-[40px]`} />
          <p className="text-dimWhite text-[10px] ">
            <span className="text-white mr-2">20%</span>DISCOUNT FOR
            <span className="text-white ml-2 mr-2">1 MONTH</span>
            ACCOUNT
          </p>
        </div>

        <div
          className={`flex flex-row  items-center w-full sm:${styles.paddingY} `}
        >
          <div>
            <h1
              className={` ss:leading-[100px] leading-[75px] ss:text-[64px] text-[52px] font-poppins font-semibold ${styles.heading2}`}
            >
              The Next
              <br className="sm:block" />{" "}
              <span className=" text-gradient">Generation</span>
            </h1>
          </div>
          <div className="ss:block hidden">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[64px] text-[40px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1>
      </div>
      {/* robot image */}
      <div
        className={`flex flex-1 ${styles.flexCenter} sm:py-0 py-10 relative`}
      >
        <img
          src={robot}
          className={`sm:w-[550px] w-[100%] h-[100%] relative  z-[5] right-0 `}
        />

        {/* the gradient behind the robot hand */}

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className="ss:hidden block flex justify-center">
        <GetStarted />
      </div>
    </section>
  );
};

export default HeroSection;
