// import React from 'react'
// import { ChevronDown } from "lucide-react";
import logo from "../imgs/logo.png";

const Navbar = () => {
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav>
      <div className="container flex items-center justify-center mt-8">
        {/* logo section */}
        <div>
          <img className="w-[9rem]" src={logo} alt="xtratheme logo" />
        </div>

        {/* links section */}
        <div className="w-full "></div>
      </div>
    </nav>
  );
};

export default Navbar;
