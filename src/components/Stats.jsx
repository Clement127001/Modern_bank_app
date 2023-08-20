import React from "react";
import styles from "../style";
import { stats } from "../constants";

const Stats = () => (
  <div
    className={`${styles.flexCenter} flex sm:flex-row flex-col items-center`}
  >
    {stats.map((stat) => (
      <div
        key={stat.id}
        className="flex flex-1  flex-center items-center justify-center flex-wrap"
      >
        <h4 className="font-poppins font-semibold text-white sm:text-[34px] text-[44px]  ml-[10%]">
          {stat.value}
        </h4>
        <p
          className="font-poppins font-normal text-gradient sm:text-[20px] text-[18px] ml-[10%]
       sm:pt-2 pb-3"
        >
          {stat.title}
        </p>
      </div>
    ))}
  </div>
);

export default Stats;
