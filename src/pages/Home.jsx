import React from "react";
import DashBoard from "./DashBoard";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <>
      <div className="flex">
        <NavBar />
        <DashBoard />
      </div>
    </>
  );
};

export default Home;
