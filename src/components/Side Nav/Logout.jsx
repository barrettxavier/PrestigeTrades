import React from "react";
import { useNavigate } from "react-router";

const Logout = ({ darkMode }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    // window.location.reload();
  };

  return (
    <div className={`w-full flex justify-center ${darkMode ? "dark" : ""}`}>
      <button
        className="absolute bottom-14 button_purple"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
