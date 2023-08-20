import React from "react";
import { card } from "../assets";
import Button from "./Button";
import styles, { layout } from "../style";
const CardDeal = () => {
  return (
    <section className={`${layout.section} sm:ml-[16px] ml-4`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal
          <br className="sm:block hidden" /> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[500px]`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
        </p>
        <Button content="Get Started" />
      </div>

      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
