/* eslint-disable react/prop-types */
import SearchBar from "./SearchBar";
import Logo from './Logo'
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";







function Navbar() {
 
  return (
    <div className="flex container  min-h-14 m-auto items-center ">
      <img className="w-10 h-10 rounded-full hidden max-[768px]:block" src='images/profile-pic.png' alt="" />
      <Logo />
      <SearchBar />
      <NavLinks />
    </div>
  );
}

export default Navbar;
