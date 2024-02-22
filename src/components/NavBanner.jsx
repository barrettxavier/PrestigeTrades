import React from "react";
import NavBar from "../pages/NavBar";
import Banner from "./TopBanner/Banner";

const NavBanner = ({ darkMode, toggleDarkMode, user, token }) => {
  return (
    <>
      <NavBar darkMode={darkMode} user={user} />

      <section className="flex">
        <Banner
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          token={token}
        />
      </section>
    </>
  );
};

export default NavBanner;
