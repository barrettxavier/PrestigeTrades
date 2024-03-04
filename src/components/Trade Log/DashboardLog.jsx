import LogPnlDisplay from "./LogPnLDisplay";

const DashboardLog = ({ trades }) => {
  return (
    <div className="display-card-light dark:display-card-dark h-fit">
      <div>
        <div className="grid grid-cols-4 md:grid-cols-5 gap-4 py-2 my-2 text-center rounded-sm">
          <p>Ticker</p>
          <p className="hidden md:inline">Quantity</p>
          <p>Entry Price</p>
          <p>Exit Price</p>
          <p className="hidden md:inline">Call/Put</p>
          <p className="md:hidden">PnL</p>
        </div>
        <hr className="my-4 opacity-20" />
        {trades.slice(0, 14).map((trade) => (
          <div
            className="grid grid-cols-4 md:grid-cols-5 gap-4 py-2 my-2 bg-slate-200 dark:bg-slate-customShade hover:bg-slate-customAccent dark:hover:bg-slate-customAccent text-center rounded-sm"
            key={trade.id}
          >
            <p>{trade.ticker}</p>

            <p className="hidden md:inline">{trade.quantity}</p>
            <p>{trade.entryPrice}</p>
            <p>{trade.exitPrice}</p>
            <p className="hidden md:inline">{trade.callOrPut}</p>
            <div className="md:hidden">
              <LogPnlDisplay trade={trade} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardLog;
