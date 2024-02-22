import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const ProfitFactor = ({ title, pnlTotal, pnlTotalLosses }) => {
  const [profitFactor, setProfitFactor] = useState(0);
  const [percentageChange, setPercentageChange] = useState(0);

  const [prevPercentChange, setPrevPercentChange] = useState(() => {
    const prevPercentChangeFromStorage = parseFloat(
      localStorage.getItem("prevPercentChange")
    );
    return !isNaN(prevPercentChangeFromStorage)
      ? prevPercentChangeFromStorage
      : 0;
  });

  // Get previous profit factor from local storage
  const [prevProfitFactor, setPrevProfitFactor] = useState(() => {
    const prevProfitFactorFromStorage = parseFloat(
      localStorage.getItem("prevProfitFactor")
    );
    return !isNaN(prevProfitFactorFromStorage)
      ? prevProfitFactorFromStorage
      : 0;
  });

  // Calculate profit factor and percentage change
  useEffect(() => {
    if (pnlTotalLosses !== 0) {
      const profitFactor = pnlTotal / pnlTotalLosses;
      setProfitFactor(profitFactor);

      if (prevProfitFactor !== 0) {
        const profitFactorPercentChange =
          ((profitFactor - prevProfitFactor) / prevProfitFactor) * 100;
        setPercentageChange(profitFactorPercentChange);
      } else {
        setPercentageChange(0);
      }

      localStorage.setItem("prevProfitFactor", profitFactor.toString());
      localStorage.setItem("prevPercentChange", percentageChange.toString());
    }
  }, [pnlTotal, pnlTotalLosses, prevProfitFactor, percentageChange]);

  return (
    <div className="stat-card-light dark:stat-card-dark">
      <h3>{title}</h3>
      <h2 className="py-2">{profitFactor.toFixed(2)}</h2>
      <p className="flex gap-2">
        Change
        {profitFactor > 0 ? (
          <ChevronUp className="text-green-600" />
        ) : (
          <ChevronDown className="text-red-600" />
        )}
      </p>
    </div>
  );
};

export default ProfitFactor;
