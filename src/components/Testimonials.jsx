import React from "react";
import styles from "../style";
import { feedback } from "../constants";
import FeedBackCard from "./FeedBackCard";

const Testimonials = () => {
  return (
    <div className={`${styles.paddingY} flex flex-col ${styles.flexCenter}`}>
      {/* for the gradient */}
      <div className="w-[50%]  h-[50%] -right-[0%]  absolute z-[0] blue__gradient rounded-full" />
      <div
        className={`w-full flex sm:flex-row flex-col relative z-[1] sm:items-center  items-left justify-around m:ml-[16px] ml-4`}
      >
        <h2 className={`${styles.heading2} max-w-[600px]`}>
          What people are
          <br className="sm:block hidden" /> saying about us
        </h2>

        <p
          className={`${styles.paragraph} max-w-[500px] text-left sm:ml-10 ml-0 sm:mt-0 mt-5 `}
        >
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className="w-full flex flex-wrap sm:justify-left justify-center relative z-[1] feedback-container sm:mt-[80px] mt-10">
        {feedback.map((feed) => (
          <FeedBackCard key={feed.id} {...feed} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
