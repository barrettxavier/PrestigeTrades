import React from "react";
import DashBoard from "./DashBoard";

import NavBanner from "../components/NavBanner";

const Home = ({
  darkMode,
  toggleDarkMode,
  trades,
  pnlTotal,
  callsTotal,
  putsTotal,
  pnlTotalLosses,
  user,
  token,
  setTrades,
  updateTrades,
}) => {
  return (
    <>
      <NavBanner
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        user={user}
        token={token}
      />
      <div className="flex">
        <DashBoard
          updateTrades={updateTrades}
          setTrades={setTrades}
          user={user}
          pnlTotalLosses={pnlTotalLosses}
          putsTotal={putsTotal}
          callsTotal={callsTotal}
          pnlTotal={pnlTotal}
          trades={trades}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
    </>
  );
};

export default Home;
