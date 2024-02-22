import React from "react";

const LogPnlDisplay = ({ trade }) => {
  const pnlValue =
    trade.callOrPut === "CALL"
      ? (trade.exitPrice - trade.entryPrice) * trade.quantity * 50
      : (trade.entryPrice - trade.exitPrice) * trade.quantity * 50;

  const color =
    (trade.callOrPut === "CALL" && pnlValue > 0) ||
    (trade.callOrPut === "PUT" && pnlValue > 0)
      ? "green"
      : "red";

  return (
    <p className="font-semibold" style={{ color }}>
      {pnlValue.toFixed(2)}
    </p>
  );
};

export default LogPnlDisplay;
