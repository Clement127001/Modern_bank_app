import { set } from "mongoose";
import React, { useState } from "react";

//importing the requires assets

import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("Home");

  const menuClickhandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full flex items-center  py-4 navbar justify-between">
      {/* logo */}
      <img
        src={logo}
        className="w-[120px] h-[40px] cursor-pointer"
        alt="logo of hoo bank"
      />

      {/* navigation list for desktop icon */}

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px]  
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} 
            ${isActive === nav.title ? "text-white" : "text-dimWhite"}`}
          >
            <a href={`#${nav.id}`}> {nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 items-center justify-end cursor-pointer">
        <img
          src={`${isOpen ? close : menu}`}
          alt="menu"
          className="w-[24px] h-[24px] object-contain"
          onClick={menuClickhandler}
        />
      </div>

      {/* navigation list for mobile icon */}

      <div
        className={`${
          !isOpen ? "hidden" : "flex"
        } p-8 m-w-[140px] absolute bg-black-gradient right-0 top-20 rounded-xl mx-4 my-2 sidebar `}
      >
        <ul className="list-none sm:hidden flex flex-col justify-end items-start flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px]  
               ${isActive === nav.title ? "text-white" : "text-dimWhite"}
            ${index === navLinks.length - 1 ? "mb-0" : "mb-5"}`}
            >
              <a href={`#${nav.id}`}> {nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
