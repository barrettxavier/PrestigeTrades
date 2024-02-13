import { Bell } from "lucide-react";
import React from "react";
import SmallProfilePic from "./SmallProfilePic";
import DateComponent from "../date";

const Banner = () => {
  return (
    <section className="w-full h-16 mb-6 border-b-2 border-b-slate-customMediumAccent flex items-center px-10 justify-between">
      <h3 className="font-semibold">Dashboard</h3>
      <section className="flex items-center h-full gap-6">
        <DateComponent />
        <div className="flex items-center  h-full gap-6 pl-6  border-l-2 border-l-slate-customMediumAccent">
          <Bell size={20} />
          <SmallProfilePic />
        </div>
      </section>
    </section>
  );
};

export default Banner;
