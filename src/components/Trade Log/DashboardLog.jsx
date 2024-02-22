const DashboardLog = ({ trades }) => {
  return (
    <div className="display-card-light dark:display-card-dark h-[700px]">
      <div>
        <div className="grid grid-cols-5 gap-4 py-2 my-2 text-center rounded-sm">
          <p>Ticker</p>
          <p>Quantity</p>
          <p>Entry Price</p>
          <p>Exit Price</p>
          <p>Call/Put</p>
        </div>
        <hr className="my-4 opacity-20" />
        {trades.slice(0, 12).map((trade) => (
          <div
            className="grid grid-cols-5 gap-4 py-2 my-2 bg-slate-200 dark:bg-slate-customShade hover:bg-slate-customAccent dark:hover:bg-slate-customAccent text-center rounded-sm"
            key={trade.id}
          >
            <p>{trade.ticker}</p>
            <p>{trade.quantity}</p>
            <p>{trade.entryPrice}</p>
            <p>{trade.exitPrice}</p>
            <p>{trade.callOrPut}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardLog;
