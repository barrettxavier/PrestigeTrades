import React from "react";
import Stats from "../components/QuickStats/Stats";
import TopBanner from "../components/TopBanner/Banner";
import ImportTrades from "../components/Import Trades/ImportTrades";
import LineChart from "../components/Chart/LineChart";
import DashboardLog from "../components/Trade Log/DashboardLog";
import CalendarPnL from "../components/Calendar/CalendarPnL";
import NetDailyPnl from "../components/Chart/NetDailyPnl";

const DashBoard = () => {
  return (
    <div className="w-screen h-screen bg-slate-customDark">
      <TopBanner />
      <div className="px-10">
        <ImportTrades />
        <Stats />
        <section className="grid grid-cols-1 xl:grid-cols-[30%,70%] gap-4 ">
          <div className="grid grid-rows-2 gap-4 ">
            <NetDailyPnl />
            <DashboardLog />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <LineChart />
            <CalendarPnL />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashBoard;
