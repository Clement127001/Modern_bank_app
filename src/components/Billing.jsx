import React from "react";
import { bill, apple, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <div id="product" className={`${layout.sectionReverse} sm:ml-[100px] ml-4`}>
      {/* having the credit card with slight gradient on the left */}
      <div className={`${layout.sectionImgReverse}`}>
        <img className="w-[100%] h-[100%] relative z-[5]" src={bill} />

        <div className="white__gradient absolute -left-1/2 top-0 w-[50%] h-[50%] z-[3]" />
        <div className="pink__gradient absolute -left-1/2 bottom-0 w-[50%] h-[50%] z-[0]" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your
          <br className="sm:block hidden" />
          billing & invoicing.
        </h2>

        <p className={`${styles.paragraph} max-w-[500px] sm:mt-4`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        {/* downloading icons */}
        <div className="flex flex-row mt-10">
          <img
            src={apple}
            alt="apple store"
            className="w-[128px] h-[42.05px]  cursor-pointer mr-3"
          />
          <img
            src={google}
            alt="google play"
            className="w-[128px] h-[42.05px]  cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Billing;
