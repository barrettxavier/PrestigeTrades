import React from "react";

const Link = ({ link, icon: Icon, url }) => {
  return (
    <li className="group flex gap-4 buttonNav">
      <Icon className="w-4 group-hover:text-white" />
      <a className="hidden lg:inline group-hover:text-white " href={url}>
        {link}
      </a>
    </li>
  );
};

export default Link;
