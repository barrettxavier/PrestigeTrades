import React from "react";

const ProfitFactor = ({ title, subheading }) => {
  return (
    <div className="stat-card">
      <h4>{title}</h4>
      <h2>$</h2>
      <p>{subheading}</p>
    </div>
  );
};

export default ProfitFactor;
