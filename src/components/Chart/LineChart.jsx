import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { parseISO, format } from "date-fns";

const LineChart = ({ darkMode, trades }) => {
  const [dayPnL, setDayPnL] = useState({});

  useEffect(() => {
    const sortedTrades = [...trades]
      .sort((a, b) => parseISO(a.date) - parseISO(b.date))
      .slice(-20);

    const calculateDayPnL = () => {
      const dayPnL = {};

      sortedTrades.forEach((trade) => {
        const date = parseISO(trade.date);
        const key = format(date, "MM-dd-yy");
        const pnl = calculatePnL(trade);
        dayPnL[key] = (dayPnL[key] || 0) + pnl;
      });

      setDayPnL(dayPnL);
    };

    const calculatePnL = (trade) => {
      if (trade.callOrPut === "CALL") {
        return (trade.exitPrice - trade.entryPrice) * 4 * trade.quantity * 5;
      } else if (trade.callOrPut === "PUT") {
        return (trade.entryPrice - trade.exitPrice) * 4 * trade.quantity * 5;
      }
      return 0;
    };

    calculateDayPnL();
  }, [trades]);

  // Function to determine background color based on PnL
  const determineBackgroundColor = (pnl) => {
    return pnl < 0 ? "red" : "green";
  };

  return (
    <div className="display-card-light dark:display-card-dark h-[600px]">
      <p>Daily PnL</p>
      <section className="h-full w-full pt-2 pb-10">
        <Bar
          data={{
            labels: Object.keys(dayPnL),
            datasets: [
              {
                label: "Daily PNL",
                data: Object.values(dayPnL),
                backgroundColor: Object.values(dayPnL).map((pnl) =>
                  determineBackgroundColor(pnl)
                ),
                barPercentage: 0.5,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  color: !darkMode
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.1)",
                },
                ticks: {
                  color: !darkMode ? "white" : "black",
                },
              },
              y: {
                grid: {
                  color: !darkMode
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.1)",
                },
                ticks: {
                  color: !darkMode ? "white" : "black",
                },
                beginAtZero: true,
              },
            },
          }}
        />
      </section>
    </div>
  );
};

export default LineChart;
