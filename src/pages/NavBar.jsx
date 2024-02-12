import React from "react";
import NavLinks from "../components/Side Nav/NavLinks";
import Logout from "../components/Side Nav/Logout";
import ProfilePic from "../components/Side Nav/ProfilePic";

const NavBar = () => {
  return (
    <div className="relative w-24 lg:w-[30%] max-w-[360px] lg:px-10 h-screen bg-slate-customMedium border-r-2 border-slate-700">
      <ProfilePic />
      <NavLinks />
      <Logout />
    </div>
  );
};

export default NavBar;
