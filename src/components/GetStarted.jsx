import React from "react";
import styles from "../style";

import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} bg-blue-gradient rounded-full p-[2px] w-[140px] h-[140px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} bg-primary rounded-full p-[2px] w-[100%] h-[100%] flex-col`}
      >
        <div className={`${styles.flexCenter} flex-row`}>
          <p>
            <span className="font-poppins text-gradient text-[18px]">Get</span>
          </p>

          <div className="pl-2">
            <img src={arrowUp} />
          </div>
        </div>
        <div>
          <p className="font-poppins text-gradient text-[18px]">Started</p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
