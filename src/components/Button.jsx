import React from "react";

const Button = ({ content }) => {
  return (
    <button
      className={`w-[120px] bg-blue-gradient px-2 py-3 mt-[20px] rounded-[10px] font-semibold `}
    >
      {content}
    </button>
  );
};

export default Button;
