import React, { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

const NetDailyPnl = ({ pnlTotal, trades, darkMode, pnlTotalLosses }) => {
  const [avgWinningTrade, setAvgWinningTrade] = useState(0);
  const [numOfWinningTrades, setNumOfWinningTrades] = useState(0);
  const [winPercent, setWinPercent] = useState(0);

  Chart.register(...registerables);

  useEffect(() => {
    const winningTrades = trades.filter(
      (trade) =>
        (trade.callOrPut === "CALL" && trade.exitPrice > trade.entryPrice) ||
        (trade.callOrPut === "PUT" && trade.exitPrice < trade.entryPrice)
    );
    setNumOfWinningTrades(winningTrades.length);
  }, [trades]);

  useEffect(() => {
    if (trades.length > 0) {
      const calculatedWinPercent = (numOfWinningTrades / trades.length) * 100;
      const winPercentCapped = Math.min(calculatedWinPercent, 100);
      setWinPercent(winPercentCapped);
    } else {
      setWinPercent(0);
    }
  }, [numOfWinningTrades, trades]);

  return (
    <div className="flex flex-col xl:flex-col lg:flex-row gap-6">
      <section className="h-full display-card-light dark:display-card-dark items-center">
        <p>Win/Loss Ratio</p>
        <section className="h-[250px] py-2">
          <Doughnut
            data={{
              labels: ["Win Rate"],
              datasets: [
                {
                  label: "Percent",
                  data: [winPercent, 100 - winPercent],
                  backgroundColor: [
                    "rgba(6, 184, 6, 0.8)",
                    "rgba(124, 124, 124, 1)",
                  ],
                  borderColor: [
                    "rgba(6, 184, 6, 0.8)",
                    "rgba(124, 124, 124, 1)",
                  ],
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,

                  display: false,
                },
              },
            }}
          />
        </section>
      </section>

      <section className="h-full display-card-light dark:display-card-dark  ">
        <p>Profit vs. Loss</p>
        <section className="h-[250px] py-2">
          <Bar
            data={{
              labels: ["Profit/Loss"],
              datasets: [
                {
                  label: "Profit",
                  data: [pnlTotal],
                  backgroundColor: "rgba(6, 184, 6, 1)",
                  barPercentage: 0.5,
                },
                {
                  label: "Loss",
                  data: [pnlTotalLosses],
                  backgroundColor: "rgba(255, 0, 0, 1)",
                  barPercentage: 0.5,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  display: false,
                  grid: {
                    color: !darkMode
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.1)",
                  },
                },

                y: {
                  beginAtZero: true,
                  grid: {
                    color: !darkMode
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.1)",
                  },
                  ticks: {
                    color: !darkMode ? "white" : "black",
                  },
                },
              },
            }}
          />
        </section>
      </section>
    </div>
  );
};

export default NetDailyPnl;
