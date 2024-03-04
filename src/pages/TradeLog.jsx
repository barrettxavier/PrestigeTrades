import { useState } from "react";
import NavBanner from "../components/NavBanner";
import { DateTime } from "luxon";

import LogPnlDisplay from "../components/Trade Log/LogPnLDisplay";
import { ChevronLeft, ChevronRight, Edit } from "lucide-react";

const TradeLog = ({ trades, darkMode, user, token, toggleDarkMode }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const tradesPerPage = 20;

  const handleNextBtn = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousBtn = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Sort trades by date in descending order
  const sortedTrades = trades.slice().sort((a, b) => {
    return DateTime.fromISO(b.date) - DateTime.fromISO(a.date);
  });

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * tradesPerPage;
  const endIndex = startIndex + tradesPerPage;
  const displayedTrades = sortedTrades.slice(startIndex, endIndex);

  return (
    <div className={`h-full  ${darkMode ? "" : "dark"}`}>
      <NavBanner
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        user={user}
        token={token}
      />
      <div className="h-full min-h-screen md:ml-20 lg:ml-[200px] bg-slate-50 dark:bg-slate-customDark">
        <div className="pb-8">
          <div className="text-black dark:text-white grid grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-4 pt-20 pb-6 px-6 mb-2 text-center rounded-sm">
            <p className="hidden lg:inline">Date</p>
            <p>Ticker</p>
            <p>Quantity</p>
            <p>Entry Price</p>
            <p>Exit Price</p>
            <p>Call/Put</p>
            <p>PnL</p>
            <p>Edit</p>
          </div>
          <hr className="my-4 opacity-20" />

          {displayedTrades.map((trade) => (
            <div
              className="grid grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 px-6 gap-4 py-6 my-2 text-black dark:text-white bg-slate-200 dark:bg-slate-customMedium hover:bg-slate-customAccent dark:hover:bg-slate-customAccent duration-500 text-center rounded-sm"
              key={trade.id}
            >
              <p className="hidden lg:inline">
                {DateTime.fromISO(trade.date).toFormat("MM-dd-yyyy")}
              </p>
              <p>{trade.ticker}</p>
              <p>{trade.quantity}</p>
              <p>{trade.entryPrice}</p>
              <p>{trade.exitPrice}</p>
              <p>{trade.callOrPut}</p>
              <LogPnlDisplay trade={trade} />
              <div className="flex justify-center cursor-pointer">
                <Edit size={16} />
              </div>
            </div>
          ))}
          <div className="relative w-full pb-40">
            <button
              className="absolute button_default px-2 top-20 right-10"
              onClick={handleNextBtn}
            >
              <ChevronRight size={16} />
            </button>
            <button
              className="absolute button_default px-2 top-20 right-20"
              onClick={handlePreviousBtn}
            >
              <ChevronLeft size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeLog;
