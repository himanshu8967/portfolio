import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex flex-wrap justify-between md:items-center text-white px-10 pt-6 pb-4 md:px-20 bg-[#2a2e45] z-50 shadow-lg">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#Home">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Home</li>
        </a>
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0">About</li>
        </a>
        <a href="#Skills">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Skills</li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Projects</li>
        </a>
        <a href="#Footer">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Contact</li>
        </a>
      </ul>

      {menu ? (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => setMenu(false)}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => setMenu(true)}
        />
      )}
    </nav>
  );
};

export default Navbar;
