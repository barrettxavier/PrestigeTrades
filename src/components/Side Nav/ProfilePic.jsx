import React from "react";
import image from "../../../public/images/3940401.png";

const ProfilePic = ({ darkMode }) => {
  return (
    <section
      className={`flex-col center py-4 lg:py-4 ${darkMode ? "dark" : ""}`}
    >
      <div className="hidden lg:inline profile-card my-8 center">
        <img src={image} alt="avatar" />
      </div>
    </section>
  );
};

export default ProfilePic;
