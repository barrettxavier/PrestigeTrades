import React, { useEffect, useState } from "react";
import TotalPnl from "./TotalPnl";
import ProfitFactor from "./ProfitFactor";
import Wins from "./Wins";
import Losses from "./Losses";

const Stats = ({ darkMode, trades, pnlTotal, pnlTotalLosses, user }) => {
  const [userTrades, setUserTrades] = useState([]);

  const getUserTradeLength = trades.filter((trade) => trade.userId === user.id);

  useEffect(() => {
    setUserTrades(getUserTradeLength);
  }, [trades]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
      <TotalPnl
        pnlTotal={pnlTotal}
        darkMode={darkMode}
        title="Total PnL"
        subheading={`Trades in total = ${userTrades.length}`}
      />
      <ProfitFactor
        pnlTotal={pnlTotal}
        pnlTotalLosses={pnlTotalLosses}
        title="Profit Factor"
      />
      <Wins pnlTotal={pnlTotal} trades={trades} title="Avg winning trade" />
      <Losses
        pnlTotalLosses={pnlTotalLosses}
        trades={trades}
        title="Avg losing trade"
      />
    </section>
  );
};

export default Stats;
