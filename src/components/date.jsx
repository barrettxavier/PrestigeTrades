import React from "react";

const DateComponent = () => {
  // Get the current date
  const currentDate = new Date();

  // Extract month, day, and year components
  const month = currentDate.toLocaleString("en-US", { month: "long" });
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  // Format the date as "Month Day, Year"
  const formattedDate = `${month} ${day}, ${year}`;

  return (
    <div>
      <p className="text-slate-400 hidden md:inline-block">{formattedDate}</p>
    </div>
  );
};

export default DateComponent;
