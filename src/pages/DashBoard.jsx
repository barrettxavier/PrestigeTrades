import Stats from "../components/QuickStats/Stats";
import ImportTrades from "../components/Import Trades/ImportTrades";
import LineChart from "../components/Chart/LineChart";
import DashboardLog from "../components/Trade Log/DashboardLog";
import CalendarPnL from "../components/Calendar/CalendarPnL";
import NetDailyPnl from "../components/Chart/NetDailyPnl";
import axios from "axios";

const DashBoard = ({
  darkMode,
  trades,
  pnlTotal,
  callsTotal,
  putsTotal,
  pnlTotalLosses,
  user,
  setTrades,
  updateTrades,
}) => {
  return (
    <div
      className={`w-screen h-full ml-20 lg:ml-[250px] ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className=" bg-slate-50 dark:bg-slate-customDark">
        <div className="mx-6">
          <ImportTrades
            darkMode={darkMode}
            user={user}
            setTrades={setTrades}
            updateTrades={updateTrades}
          />
          <Stats
            user={user}
            pnlTotalLosses={pnlTotalLosses}
            putsTotal={putsTotal}
            callsTotal={callsTotal}
            pnlTotal={pnlTotal}
            trades={trades}
            darkMode={darkMode}
          />
          <section className="grid grid-cols-1 xl:grid-cols-[1fr,2fr] gap-6">
            <div className="flex flex-col gap-6">
              <NetDailyPnl darkMode={darkMode} />
              <DashboardLog trades={trades} darkMode={darkMode} />
            </div>
            <div className="flex flex-col gap-6">
              <LineChart darkMode={darkMode} />
              <CalendarPnL darkMode={darkMode} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
