import React from "react";
import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <div
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col justify-around bg-black-gradient rounded-[20px] mt-10 max-w-[1000px] md:ml-[10%] box-shadow`}
  >
    <div className={`flex-start flex-col`}>
      <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-2 leading-12`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div className="sm:mt-5 mt-0 sm:l-10 ml-0 mb-5 sm:flex-center flex-start">
      <Button content="Get Started" />
    </div>
  </div>
);

export default CTA;
