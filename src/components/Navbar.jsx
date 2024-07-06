import React from "react";

const Navbar = () => {
  return (
    <nav className=" bg-slate-800 flex justify-between items-center px-4 h-14">
      <div className="log font-bold text-white text-2xl">
        <span className="text-green-700"> &lt; </span>
        <span>Pass</span>
        <span className="text-green-600">OP/&gt;</span>
      </div>
      <ul>
        <li>
          <a href="#" className="px-1 hover:font-bold text-white">
            Home
          </a>
          <a href="#" className="px-1 hover:font-bold text-white">
            About
          </a>
          <a href="#" className="px-1 hover:font-bold text-white">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
