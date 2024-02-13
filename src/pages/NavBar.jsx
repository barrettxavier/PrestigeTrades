import React from "react";
import NavLinks from "../components/Side Nav/NavLinks";
import Logout from "../components/Side Nav/Logout";
import ProfilePic from "../components/Side Nav/ProfilePic";

const NavBar = () => {
  return (
    <div className="relative w-24 lg:w-[30%] max-w-[280px] lg:px-6 h-screen bg-slate-customMedium border-r-2 border-slate-customMediumLight">
      <ProfilePic />
      <NavLinks />
      <Logout />
    </div>
  );
};

export default NavBar;
