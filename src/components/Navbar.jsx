// import React from 'react'
// import { ChevronDown } from "lucide-react";
import logo from "../imgs/logo.png";

const Navbar = () => {
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className="flex items-center justify-center">
      <div className="container flex items-center justify-between mt-8 border-black border-[1px] rounded-full pr-4">
        {/* logo section */}
        <div>
          <img className="w-[9rem]" src={logo} alt="xtratheme logo" />
        </div>

        {/* links section */}
        <div className="w-[1/2] flex items-center justify-center">
          <ul className="flex items-center justify-center gap-10 font-bold text-txt-link-grey text-base lg:text-lg ">
            <li className="hover:text-txt-link-hover hover:cursor-pointer hover:ease-in-out hover:duration-[220ms]">
              Home
            </li>
            <li className="hover:text-txt-link-hover hover:cursor-pointer hover:ease-in-out hover:duration-[220ms]">
              About
            </li>
            <li className="hover:text-txt-link-hover hover:cursor-pointer hover:transition-all hover:ease-in-out hover:duration-[220ms]">
              Services
            </li>
            <li className="hover:text-txt-link-hover hover:cursor-pointer hover:transition-all hover:ease-in-out hover:duration-[220ms]">
              Blog
            </li>
            <li className="hover:text-txt-link-hover hover:cursor-pointer hover:transition-all hover:ease-in-out hover:duration-[220ms]">
              Pages
            </li>
            <li className="hover:text-txt-link-hover hover:cursor-pointer hover:ease-in-out hover:duration-[220ms]">
              Contact
            </li>
          </ul>
        </div>

        {/* button section */}
        <div className="w-[1/2] flex items-center justify-center">
          <button className="bg-gradient-to-r from-btn-gradient-start to-btn-gradient-end rounded-full text-white px-6 py-3 hover:from-btn-gradient-end/90 hover:to-btn-gradient-start/90 hover:transition-all hover:shadow-[0_0_20px_rgba(var(--btn-gradient-end-rgb),0.3)] hover:ease-in-out hover:duration-[220ms] hover:scale-[1.02]">
            Free Consultation
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
