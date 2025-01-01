// import React from 'react'
import envato_market from "./imgs/envato_market.svg";

const Adbar = () => {
  const handle_logo_click = () => {
    window.location.href = "/";
  };

  const handle_download_click = () => {
    window.open(
      "https://themeforest.net/item/xtra-wordpress-theme/22955780",
      "_blank"
    );
  };

  return (
    <nav className="bg-zinc-800 shadow-sm">
      <div className="max-w-7xl mx-10 px-0 lg:px-0 ">
        <div className="flex w-[43rem] lg:w-[90rem] items-center justify-center h-10 lg:h-[3.3rem] ">
          {/* Logo */}
          <div className="flex-none">
            <img
              src={envato_market}
              alt="envato market logo"
              className=" w-[8rem] lg:w-[10rem] hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
              onClick={handle_logo_click}
            />
          </div>
          {/* message */}
          <div className="flex-1 flex justify-center text-xs lg:text-base">
            <span className="text-white">
              Limited time offer, Buy XTRA WordPress theme only <b>$49</b>
            </span>
          </div>

          {/* Button */}
          <div className="flex-none lg:mr-[-1rem]">
            <button
              className="bg-[#82B440] drop-shadow-md shadow-3xl text-zinc-800 px-3 py-[0.15rem] text-xs lg:text-sm lg:px-6 lg:py-[0.30rem]  rounded-md hover:bg-[#75a931] transition-colors"
              onClick={handle_download_click}
            >
              Download XTRA Theme
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Adbar;
