import React from "react";

const ProfilePic = () => {
  return (
    <section className="flex-col center py-4 lg:py-4 ">
      <div className="hidden lg:inline profile-card my-8 center">
        <img src="" alt="avatar" />
      </div>
      <h3 className="hidden lg:inline">Name</h3>
    </section>
  );
};

export default ProfilePic;
