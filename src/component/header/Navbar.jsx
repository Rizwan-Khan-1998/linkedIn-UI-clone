/* eslint-disable react/prop-types */
import SearchBar from "./SearchBar";
import Logo from './Logo'
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";
import MenuLink from "./MenuLink";  







function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 650) {
      setIsMobile(true);
    }
  }, [])
  console.log(isMobile);
  return (
    <div className="flex w-screen lg:mx-auto lg:max-w-[1128px] gap-2 px-4 lg:px-0 min-h-14 items-center">
      <img className="w-8 h-8 rounded-full hidden max-[768px]:block" src='images/profile-pic.png' alt="" />
      <Logo />
      <SearchBar />
      <NavLinks />
      {isMobile && (
      <MenuLink
        to="/messages"
        imageActive="images/activeMessages.png"
        image="images/messanging.png"
        title="Messaging"
        mobile={isMobile}

      />)}
    </div>
  );
}

export default Navbar;
