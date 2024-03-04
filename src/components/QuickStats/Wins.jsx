import React, { useEffect, useState } from "react";

const Wins = ({ title, trades, pnlTotal }) => {
  const [avgWinningTrade, setAvgWinningTrade] = useState(0);
  const [numOfWinningTrades, setNumOfWinningTrades] = useState(0);
  const [winPercent, setWinPercent] = useState(0);

  useEffect(() => {
    const winningTrades = trades.filter(
      (trade) =>
        (trade.callOrPut === "CALL" && trade.exitPrice > trade.entryPrice) ||
        (trade.callOrPut === "PUT" && trade.exitPrice < trade.entryPrice)
    );
    setNumOfWinningTrades(winningTrades.length);
  }, [trades]);

  useEffect(() => {
    if (numOfWinningTrades > 0) {
      const avgWinningTrade = pnlTotal / numOfWinningTrades;
      setAvgWinningTrade(avgWinningTrade);
    } else {
      setAvgWinningTrade(0);
    }
    const winPercent = (numOfWinningTrades / trades.length) * 100;
    setWinPercent(winPercent);
  }, [numOfWinningTrades, pnlTotal]);

  return (
    <div className="relative stat-card-light dark:stat-card-dark">
      <h3>{title}</h3>
      <h2 className="py-2" style={{ color: "green" }}>
        ${avgWinningTrade.toFixed(2)}
      </h2>

      <p>
        <p>Trades won: {numOfWinningTrades}</p>
      </p>
      <h2
        className="text-2xl absolute right-4 bottom-auto xl:bottom-2 bg-slate-200 dark:bg-slate-customMediumAccent rounded-full size-20 flex items-center justify-center"
        style={{ color: "green" }}
      >
        {winPercent.toFixed(0)}%
      </h2>
    </div>
  );
};

export default Wins;
