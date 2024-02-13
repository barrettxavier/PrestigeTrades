import React from "react";
import Stats from "../components/QuickStats/Stats";
import TopBanner from "../components/TopBanner/Banner";

const DashBoard = () => {
  return (
    <div className="w-screen h-screen bg-slate-customDark">
      <TopBanner />
      <div className="px-10">
        <Stats />
      </div>
    </div>
  );
};

export default DashBoard;
