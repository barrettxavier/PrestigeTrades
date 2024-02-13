import React from "react";

const ImportTrades = () => {
  return (
    <section className="center-horizontal gap-12">
      <div className="button_default">
        <p>
          <span className="font-bold mr-2"> + </span> Import trades
        </p>
      </div>
      <p className="faded-text hidden md:inline-block">
        Last trade was imported: Date and time
      </p>
    </section>
  );
};

export default ImportTrades;
