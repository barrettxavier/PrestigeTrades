import React, { useEffect, useState } from "react";

const Losses = ({ title, trades, pnlTotalLosses }) => {
  const [numOfLosingTrades, setNumOfLosingTrades] = useState(0);
  const [avgLosingTrade, setAvgLosingTrade] = useState(0);
  const [lossPercent, setLossPercent] = useState(0);

  useEffect(() => {
    const losingTrades = trades.filter(
      (trade) =>
        (trade.callOrPut === "PUT" && trade.exitPrice > trade.entryPrice) ||
        (trade.callOrPut === "CALL" && trade.exitPrice < trade.entryPrice)
    );
    setNumOfLosingTrades(losingTrades.length);
  }, [trades]);

  useEffect(() => {
    if (numOfLosingTrades > 0) {
      const avgLosingTrade = pnlTotalLosses / numOfLosingTrades;
      setAvgLosingTrade(avgLosingTrade);
    } else {
      setAvgLosingTrade(0);
    }
    const lossPercent = (numOfLosingTrades / trades.length) * 100;
    setLossPercent(lossPercent);
  }, [numOfLosingTrades, pnlTotalLosses]);

  return (
    <div className="relative stat-card-light dark:stat-card-dark">
      <h3>{title}</h3>
      <h2 className="py-2" style={{ color: "red" }}>
        ${avgLosingTrade.toFixed(2)}
      </h2>
      <p>Trades lost: {numOfLosingTrades}</p>
      <h2
        className="text-2xl absolute right-4 bottom-auto xl:bottom-2 bg-slate-200 dark:bg-slate-customMediumAccent rounded-full size-20 flex items-center justify-center"
        style={{ color: "red" }}
      >
        {lossPercent.toFixed(0)}%
      </h2>
    </div>
  );
};

export default Losses;
