import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import TradeLog from "../pages/TradeLog";
import { useEffect, useState } from "react";
import axios from "axios";
import Login from "../pages/Login";
import Register from "../pages/Register";
import JournalEntry from "../pages/JournalEntry";
import Tradingview from "../pages/Tradingview";

function App() {
  const [trades, setTrades] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [pnlTotalLosses, setPnlTotalLosses] = useState(0);
  const [pnlTotal, setPnlTotal] = useState(0);
  // ========================
  const [callsTotal, setCallsTotal] = useState(0);
  const [putsTotal, setPutsTotal] = useState(0);
  const [callsLosses, setCallsLosses] = useState(0);
  const [putsLosses, setPutsLosses] = useState(0);
  // ========================
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

  const updateTrades = (newTrade) => {
    setTrades([...trades, newTrade]);
  };

  // Get trades from the database
  useEffect(() => {
    const getTrades = async () => {
      const response = await axios.get("api/trades");
      setTrades(response.data);
    };
    getTrades();
  }, []);

  // Total Pnl for Calls and Puts
  useEffect(() => {
    // Calculate pnlCalls for call trades
    const pnlCalls = trades.map((trade) => {
      if (trade.callOrPut === "CALL") {
        return (trade.exitPrice - trade.entryPrice) * 4 * trade.quantity * 5;
      } else {
        return 0;
      }
    });
    const callsTotal = pnlCalls.reduce((a, b) => a + b, 0);
    setCallsTotal(callsTotal);

    // Calculate pnlPuts for put trades
    const pnlPuts = trades.map((trade) => {
      if (trade.callOrPut === "PUT" && trade.exitPrice < trade.entryPrice) {
        return (trade.entryPrice - trade.exitPrice) * 4 * trade.quantity * 5;
      } else {
        return 0;
      }
    });
    const putsTotal = pnlPuts.reduce((a, b) => a + b, 0);
    setPutsTotal(putsTotal);

    const pnlTotal = callsTotal + putsTotal;
    setPnlTotal(pnlTotal);
  }, [trades]);

  // Total Losses for Calls and Puts
  useEffect(() => {
    let callsLosses = 0;
    let putsLosses = 0;

    const callsLoss = trades
      .filter(
        (trade) =>
          trade.callOrPut === "CALL" && trade.exitPrice < trade.entryPrice
      )
      .map(
        (trade) => (trade.entryPrice - trade.exitPrice) * 4 * trade.quantity * 5
      );
    callsLosses = callsLoss.reduce((a, b) => a + b, 0);

    const putsLoss = trades
      .filter(
        (trade) =>
          trade.callOrPut === "PUT" && trade.exitPrice > trade.entryPrice
      )
      .map(
        (trade) => (trade.exitPrice - trade.entryPrice) * 4 * trade.quantity * 5
      );
    putsLosses = putsLoss.reduce((a, b) => a + b, 0);

    const pnlTotalLosses = callsLosses + putsLosses;
    setPnlTotalLosses(pnlTotalLosses);

    setCallsLosses(callsLosses);
    setPutsLosses(putsLosses);
  }, [trades]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <Home
              updateTrades={updateTrades}
              token={token}
              user={user}
              pnlTotalLosses={pnlTotalLosses}
              pnlTotal={pnlTotal}
              trades={trades}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          }
        />
        <Route
          path="/trade log"
          element={
            <TradeLog
              trades={trades}
              darkMode={darkMode}
              user={user}
              token={token}
              toggleDarkMode={toggleDarkMode}
            />
          }
        />
        <Route
          path="/journal entries"
          element={
            <JournalEntry
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              user={user}
              token={token}
            />
          }
        />
        <Route
          path="tradingview"
          element={
            <Tradingview
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              user={user}
              token={token}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
