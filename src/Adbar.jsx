// import React from 'react'
import envato_market from "./imgs/envato_market.svg";

const Adbar = () => {
  return (
    <nav className="bg-zinc-800 shadow-sm">
      <div className="max-w-7xl ml-0 px-0 sm:px- lg:px-0">
        <div className="flex justify-between items-center h-10 lg:h-14">
          {/* Logo */}
          <div className="flex items-center"></div>
          <img
            src={envato_market}
            alt="envato market logo"
            className=" w-[8rem] lg:w-[15rem] hover: cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          {/* message */}
          <div className=" text-xs lg:text-base">
            <span className="text-white">
              Limited time offer, Buy XTRA WordPress theme only <b>$49</b>
            </span>
          </div>

          {/* Button */}
          <div>
            <button className="bg-emerald-500 text-white px-6 py-[0.30rem] rounded-lg hover:bg-emerald-600 transition-colors">
              Download XTRA Theme
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Adbar;
