import { Bell } from "lucide-react";
import React, { useEffect, useState } from "react";
import SmallProfilePic from "./SmallProfilePic";
import DateComponent from "../date";
import axios from "axios";

const Banner = ({ darkMode, toggleDarkMode }) => {
  const [toggleWelcome, setToggleWelcome] = useState(false);
  const token = localStorage.getItem("token");
  const [user, setUser] = useState("");

  useEffect(() => {
    async function getMe() {
      const { data } = await axios.get("/api/users/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUser(data.user);
    }
    getMe();
  }, [token]);

  useEffect(() => {
    const checkForUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        setToggleWelcome(true);
      }
    };
    checkForUser();
  }, [token]);

  //get route param
  const url = window.location.pathname;
  let route = url.split("/")[1];
  const routeName = route.replace("%20", " ");

  return (
    <section
      className={`w-screen h-full sm:ml-20 lg:ml-[200px]  ${
        darkMode ? "" : "dark"
      }`}
    >
      <div className=" border-b-2 border-b-slate-300 dark:border-b-slate-customBorder flex  items-center px-6 justify-between bg-slate-100 dark:bg-slate-customDark">
        <h3 className="text-black dark:text-white font-semibold">
          {routeName.charAt(0).toUpperCase(1) + routeName.slice(1)}
        </h3>
        <section className="flex items-center h-[70px] sm:h-full gap-6">
          {toggleWelcome ? (
            <p className="hidden lg:flex text-black dark:text-white items-center justify-center">
              {user.username}'s Trading Journal
            </p>
          ) : null}
          <DateComponent />
          <div className="flex items-center h-full gap-6 pl-6  border-l-2 border-l-slate-300 dark:border-l-slate-customBorder">
            <Bell className="text-black dark:text-white" size={20} />
            {/* whenever a new trade is added, create a notification */}
            <SmallProfilePic />
            <div className="hidden sm:flex items-center  h-16 pr-6">
              <input
                className="input"
                type="checkbox"
                id="darkmode-toggle"
                onClick={toggleDarkMode}
              />
              <label className="label" htmlFor="darkmode-toggle"></label>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Banner;
