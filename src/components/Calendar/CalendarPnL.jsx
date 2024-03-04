import React, { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import { endOfMonth, startOfMonth, eachDayOfInterval, getDay } from "date-fns";
import clsx from "clsx";
import axios from "axios";
import LogPnlDisplay from "../Trade Log/LogPnLDisplay";

const CalendarPnL = ({ trades, darkMode }) => {
  const [dayPnL, setDayPnL] = useState({});
  const [tradesTaken, setTradesTaken] = useState([]);
  const [tradesForDate, setTradesForDate] = useState([]);
  const [toggleTradeDetails, setToggleTradeDetails] = useState(false);
  const [journalEntries, setJournalEntries] = useState([]);
  const [noTradesTaken, setNoTradesTaken] = useState(
    "No trades taken for this date"
  );

  const currentDate = new Date();

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const startingDayIndex = getDay(firstDayOfMonth);

  const getDayPnL = (date) => {
    const key = format(date, "yyyy-MM-dd");
    return dayPnL[key] || 0;
  };

  useEffect(() => {
    const getJournalEntries = async () => {
      try {
        const response = await axios.get("/api/journalEntries");
        const journalEntries = response.data;
        setJournalEntries(journalEntries);
      } catch (error) {
        console.error(error);
      }
    };
    getJournalEntries();
  }, []);

  useEffect(() => {
    const calculateDayPnL = () => {
      const dayPnL = {};

      trades.forEach((trade) => {
        const date = parseISO(trade.date);
        const key = format(date, "yyyy-MM-dd");
        const pnl = calculatePnL(trade);
        dayPnL[key] = (dayPnL[key] || 0) + pnl;
      });

      setDayPnL(dayPnL);
    };

    const calculatePnL = (trade) => {
      if (trade.callOrPut === "CALL") {
        return (trade.exitPrice - trade.entryPrice) * trade.quantity * 50;
      } else if (trade.callOrPut === "PUT") {
        return (trade.entryPrice - trade.exitPrice) * trade.quantity * 50;
      }
      return 0;
    };

    calculateDayPnL();

    // get trades taken for each day
    const tradesTaken = {};
    trades.forEach((trade) => {
      const date = format(parseISO(trade.date), "yyyy-MM-dd");
      tradesTaken[date] = (tradesTaken[date] || 0) + 1;
    });
    setTradesTaken(tradesTaken);
  }, [trades, setDayPnL, setTradesTaken, parseISO, format]);

  const handleDateClick = (day) => {
    return () => {
      const clickedDate = format(day, "yyyy-MM-dd");

      const tradesForDate = trades.filter(
        (trade) => format(parseISO(trade.date), "yyyy-MM-dd") === clickedDate
      );
      setTradesForDate(tradesForDate);
      handleTradeDetailsClick();

      // if no trades for the clicked date, return no trades taken
      if (tradesForDate.length === 0) {
        const noTradesTaken = "No trades taken for this date";
        setNoTradesTaken(noTradesTaken);
      }
    };
  };

  const handleTradeDetailsClick = () => {
    setToggleTradeDetails(!toggleTradeDetails);
  };

  const handleBackBtn = () => {
    setToggleTradeDetails(!toggleTradeDetails);
  };

  return (
    <div className="display-card-light dark:display-card-dark h-fit xl:min-h-[950px]">
      {!toggleTradeDetails ? (
        <>
          <div className="my-4">
            <p>{format(currentDate, "MMMM yyyy")}</p>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {weekDays.map((day, index) => (
              <div key={index} className="text-center font-semibold">
                {day}
              </div>
            ))}
            {Array.from({ length: startingDayIndex }).map((_, index) => {
              const currentDate = new Date(firstDayOfMonth);
              currentDate.setDate(
                currentDate.getDate() + index - startingDayIndex
              );
              return (
                <div
                  key={`empty-${index}`}
                  className="text-slate-400 dark:text-slate-700 h-14 md:h-24 2xl:h-32 p-2 border border-gray-100 rounded-md dark:border-gray-800 hover:ring-2 hover:ring-purple-600 "
                >
                  {format(currentDate, "d")}
                </div>
              );
            })}
            {daysInMonth.map((day, index) => (
              <div
                key={index}
                onClick={handleDateClick(day)}
                className={clsx(
                  "h-14 md:h-24 2xl:h-32 p-2 border border-gray-200 rounded-md dark:border-gray-600 hover:ring-2 hover:ring-purple-600  ",
                  {
                    "bg-green-700 ": getDayPnL(day) > 0,
                    "bg-red-700": getDayPnL(day) < 0,
                  }
                )}
              >
                {format(day, "d")}
                <div className="hidden md:inline h-full w-full text-center text-white">
                  {getDayPnL(day) === 0 ? null : (
                    <p>
                      ${getDayPnL(day)}
                      <br />
                      {tradesTaken[format(day, "yyyy-MM-dd")]
                        ? ` ${tradesTaken[format(day, "yyyy-MM-dd")]} trades`
                        : null}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div>
            {tradesForDate.map((trade, index) => (
              <div
                key={index}
                className="bg-slate-200 dark:bg-slate-customShade flex flex-col border border-gray-200 rounded-md dark:border-slate-customBorder p-4 my-4"
              >
                <div className="flex justify-between">
                  <p>{format(parseISO(trade.date), "dd/MM/yyyy")}</p>
                  <p>{trade.callOrPut}</p>
                </div>
                <div className="flex justify-between">
                  <p>Entry: ${trade.entryPrice}</p>
                  <p>Exit: ${trade.exitPrice}</p>
                </div>
                <div className="flex justify-between">
                  <p>Quantity: {trade.quantity}</p>
                  <p className="flex gap-2">
                    PNL: <LogPnlDisplay trade={trade} />
                  </p>
                </div>
                {journalEntries.map((entry) => {
                  if (entry.tradeId === trade.id) {
                    return <p key={entry.id}>Journal Entry: {entry.entry}</p>;
                  } else {
                    return null;
                  }
                })}
              </div>
            ))}

            <button className="button_purple mb-2" onClick={handleBackBtn}>
              Back
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CalendarPnL;
