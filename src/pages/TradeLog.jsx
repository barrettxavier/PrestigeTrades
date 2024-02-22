import NavBanner from "../components/NavBanner";
import LogPnlDisplay from "../components/Trade Log/LogPnLDisplay";

const TradeLog = ({ trades, darkMode, user, token, toggleDarkMode }) => {
  const handleNextBtn = () => {
    console.log("Next button clicked");
  };
  return (
    <div className={` h-full  ${darkMode ? "dark" : ""}`}>
      <NavBanner
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        user={user}
        token={token}
      />
      <div className=" min-h-screen ml-20 lg:ml-[250px] bg-slate-50 dark:bg-slate-customDark">
        <div className="pb-8">
          <div className="text-black dark:text-white grid grid-cols-6 gap-4 pt-20 pb-6 mb-2 text-center rounded-sm">
            <p>Ticker</p>
            <p>Quantity</p>
            <p>Entry Price</p>
            <p>Exit Price</p>
            <p>Call/Put</p>
            <p>PnL</p>
          </div>
          <hr className="my-4 opacity-20" />

          {trades.slice(0, 30).map((trade) => (
            <div
              className="grid grid-cols-6 gap-4 py-2 my-2 text-black dark:text-white bg-slate-200 dark:bg-slate-customMedium hover:bg-slate-customAccent dark:hover:bg-slate-customAccent duration-500 text-center rounded-sm"
              key={trade.id}
            >
              <p>{trade.ticker}</p>
              <p>{trade.quantity}</p>
              <p>{trade.entryPrice}</p>
              <p>{trade.exitPrice}</p>
              <p>{trade.callOrPut}</p>
              <LogPnlDisplay trade={trade} />
            </div>
          ))}

          <div className="relative w-full">
            <button
              className="absolute button_default top-10 right-10"
              onClick={handleNextBtn}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeLog;
