import React, { useEffect, useState } from "react";
import NavLinks from "../components/Side Nav/NavLinks";
import ProfilePic from "../components/Side Nav/ProfilePic";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

const NavBar = ({ darkMode, user }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  function handleLogout() {
    window.localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <div className={` ${darkMode ? "" : "dark"}`}>
      <div className="hidden sm:inline fixed w-20 lg:w-[200px] lg:px-2   h-screen bg-slate-100 dark:bg-slate-customMedium border-r-2 border-slate-300 dark:border-slate-customBorder">
        <ProfilePic darkMode={darkMode} user={user} />
        <NavLinks darkMode={darkMode} />
        <div className={`w-full flex justify-center ${darkMode ? "dark" : ""}`}>
          <button
            className="hidden lg:inline absolute bottom-14 button_purple"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="lg:hidden absolute bottom-14 button_purple px-2"
            onClick={handleLogout}
          >
            <ChevronLeft size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
