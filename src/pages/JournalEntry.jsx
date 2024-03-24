import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBanner from "../components/NavBanner";

const JournalEntry = ({ darkMode, toggleDarkMode, user, token }) => {
  const [journalEntries, setJournalEntries] = useState([]);

  useEffect(() => {
    const getJournalEntries = async () => {
      const response = await axios.get("/api/journalEntries");
      setJournalEntries(response.data);
    };
    getJournalEntries();
    console.log(journalEntries);
  }, []);

  return (
    <div>
      <div className={`h-full  ${darkMode ? "" : "dark"}`}>
        <NavBanner
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          user={user}
          token={token}
        />
        <div className="h-full min-h-screen md:ml-20 lg:ml-[200px] bg-slate-50 dark:bg-slate-customDark">
          <div className="flex justify-center text-black dark:text-white gap-4 pt-20 pb-6 px-6 mb-2 text-center rounded-sm">
            <p>Journal Entries</p>
          </div>
          <hr className="my-4 opacity-20" />

          {journalEntries.map((entry) => (
            <div
              className="grid grid-cols-1 px-6 gap-4 py-6 my-2 text-black dark:text-white bg-slate-200 dark:bg-slate-customMedium hover:bg-slate-customAccent dark:hover:bg-slate-customAccent duration-500 text-center rounded-sm"
              key={entry.id}
            >
              <p>{entry.entry}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalEntry;
