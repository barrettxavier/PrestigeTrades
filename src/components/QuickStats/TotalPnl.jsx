const TotalPnl = ({ title, subheading, darkMode, pnlTotal }) => {
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="stat-card-light dark:stat-card-dark">
        <h3>{title}</h3>
        <h2 className="py-2" style={{ color: pnlTotal > 0 ? "green" : "red" }}>
          ${pnlTotal.toFixed(2)}
        </h2>{" "}
        <p>{subheading}</p>
      </div>
    </div>
  );
};

export default TotalPnl;
