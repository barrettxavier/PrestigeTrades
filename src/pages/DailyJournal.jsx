import NavBanner from "../components/NavBanner";

const DailyJournal = ({ darkMode, toggleDarkMode, user, token }) => {
  return (
    <div className={`h-full  ${darkMode ? "" : "dark"}`}>
      <NavBanner
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        user={user}
        token={token}
      />
      <div className="h-full min-h-screen md:ml-20 lg:ml-[200px] bg-slate-50 dark:bg-slate-customDark">
        <div className="pb-8"></div>
      </div>
    </div>
  );
};

export default DailyJournal;
