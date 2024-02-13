import React from "react";
import TotalPnl from "./TotalPnl";
import ProfitFactor from "./ProfitFactor";
import Wins from "./Wins";
import Losses from "./Losses";

const Stats = () => {
  return (
    <section className="flex gap-8 w-full h-28  justify-between items-center">
      <TotalPnl title="Total PnL" subheading="Trades in total = ??" />
      <ProfitFactor title="Profit Factor" subheading="Trades in total = ??" />
      <Wins title="Average winning trade" subheading="Trades in total = ??" />
      <Losses title="Average losing trade" subheading="Trades in total = ??" />
      {/* <div className="bg-slate-customMedium border-2 border-slate-customMediumLight w-[25%] h-full rounded-lg"></div> */}
    </section>
  );
};

export default Stats;
