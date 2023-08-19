import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { shield, star, send } from "../assets";
import { features } from "../constants";

const FeatureCard = ({ icon, title, content, index }) => (
  // entire feature card having icon as well as the details
  <div
    className={`${
      styles.flexStart
    }  feature-card rounded-[20px] cursor-pointer px-4 py-4 flex flex-row ${
      index === features.length - 1 ? "mb-0" : "mb-[24px]"
    } `}
  >
    {/* showing icons */}
    <div className={` bg-dimBlue p-2 rounded-[50px] mt-6  `}>
      <img src={icon} className={` ${styles.flexCenter}  w-[40px] h-[32px] `} />
    </div>
    {/* feature and its description */}
    <div className="flex flex-col ml-[32px]">
      <h4 className={`text-white text-[20px] font-poppins font-semibold`}>
        {title}
      </h4>
      <p
        className={`${styles.paragraph} sm:max-w-[600px] sm:text-[16px]  text-[14px] text-base/1`}
      >
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  //business card
  return (
    <section id="features" className={`${layout.section} px-4 `}>
      {/* details about the business  */}
      <div className={`${layout.sectionInfo} text-base/6`}>
        <h2 className={`${styles.heading2}`}>
          You do the business,
          <br className="md:block block" /> we’ll handle the money.
        </h2>

        <p className={`${styles.paragraph} max-w-[500px] mt-4`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <div>
          <Button content="Get Started" />
        </div>
      </div>
      {/* features provided by the bank */}
      <div className={`${layout.sectionImg}  flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} index={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Business;
