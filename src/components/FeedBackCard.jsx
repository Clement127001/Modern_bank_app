import React from "react";
import { quotes } from "../assets";

const FeedBackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex flex-col feedback-card justify-between sm:mr-10 mr-5 sm:mt-0 mt-3 px-10 py-[60px] rounded-[20px]">
      <img src={quotes} className="w-[42px] h-[27px] object-contain" />
      <h4 className="text-white font-poppins font-normal leading-[32px] text-[18px] max-w-[290px] mt-10 ">
        Money is only a tool. It will take you wherever you wish, but it will
        not replace you as the driver.
      </h4>

      <div className="flex flex-row mt-[29px]">
        <img src={img} className="w-[100%] h-[100%] w-[48px] h-[48px]" />
        <div className="flex flex-col ml-[16px]">
          <h4 className="text-white font-semibold text-[18px]">{name}</h4>
          <p className="text-dimWhite font-normal text-[14px]">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
