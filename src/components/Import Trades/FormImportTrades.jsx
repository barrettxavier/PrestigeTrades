import React, { useEffect, useState } from "react";
import axios from "axios";

const FormImportTrades = ({ darkMode, user, updateTrades }) => {
  const [ticker, setTicker] = useState("");
  const [quantity, setQuantity] = useState("Quantity");
  const [entryPrice, setEntryPrice] = useState("Entry Price");
  const [exitPrice, setExitPrice] = useState("Exit Price");
  const [callOrPut, setCallOrPut] = useState("");
  const [date, setDate] = useState("");

  const importTrade = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "api/trades",
        {
          ticker,
          quantity,
          entryPrice,
          exitPrice,
          callOrPut: callOrPut.toUpperCase(),
          date: new Date(date),
          userId: user.id,
        },
        {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
          },
        }
      );
      if (response.status === 201) {
        updateTrades(response.data);
        setTicker("");
        setQuantity("Quantity");
        setEntryPrice("Entry Price");
        setExitPrice("Exit Price");
        setCallOrPut("");
        setDate("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`${darkMode ? "" : "dark"}`}>
      <form
        action=""
        className=" w-full min-h-32 form-light dark:form-dark mb-6 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-8 items-center justify-center py-8"
        onSubmit={importTrade}
      >
        <input
          className="p-2 rounded-md bg-slate-200 dark:bg-white dark:text-black dark:outline-purple-700"
          type="text"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          className="p-2 rounded-md bg-slate-200 dark:bg-white dark:text-black dark:outline-purple-700"
          type="text"
          placeholder="Ticker"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
        />

        <input
          className="p-2 rounded-md bg-slate-200 dark:bg-white dark:text-black dark:outline-purple-700"
          type="number"
          placeholder="Entry Price"
          value={entryPrice}
          onChange={(e) => setEntryPrice(e.target.value)}
        />
        <input
          className="p-2 rounded-md bg-slate-200 dark:bg-white dark:text-black dark:outline-purple-700"
          type="number"
          placeholder="Exit Price"
          value={exitPrice}
          onChange={(e) => setExitPrice(e.target.value)}
        />
        <input
          className="p-2 rounded-md bg-slate-200 dark:bg-white dark:text-black dark:outline-purple-700"
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          className="p-2 rounded-md bg-slate-200 dark:bg-white dark:text-black dark:outline-purple-700"
          type="text"
          placeholder="Call or Put"
          value={callOrPut}
          onChange={(e) => setCallOrPut(e.target.value)}
        />

        <button className="button_purple " type="submit">
          <p>Submit</p>
        </button>
      </form>
    </div>
  );
};

export default FormImportTrades;
