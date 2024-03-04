import React, { useEffect, useState } from "react";
import FormImportTrades from "./FormImportTrades";
import axios from "axios";

const ImportTrades = ({ darkMode, setTrades, updateTrades }) => {
  const [toggleImportTrade, setToggleImportTrade] = useState(false);
  const token = localStorage.getItem("token");
  const [user, setUser] = useState("");

  useEffect(() => {
    async function getMe() {
      const { data } = await axios.get("/api/users/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUser(data.user);
    }
    getMe();
  }, [token]);

  const handleImportTradeBtn = () => {
    setToggleImportTrade(!toggleImportTrade);
  };

  return (
    <section>
      <div className="center-horizontal gap-12 pt-12 pb-6">
        <button onClick={handleImportTradeBtn} className="button_default">
          <p>
            <span className="font-bold mr-2"> + </span> Import trades
          </p>
        </button>
        {/* <p className="faded-text hidden md:inline-block">
          Last trade was imported :{" "}
          <span className="font-semibold text-black dark:text-white">
            Date and time
          </span>
        </p> */}
      </div>
      <div>
        {toggleImportTrade ? (
          <FormImportTrades
            darkMode={darkMode}
            user={user}
            setTrades={setTrades}
            updateTrades={updateTrades}
          />
        ) : null}
      </div>
    </section>
  );
};

export default ImportTrades;
