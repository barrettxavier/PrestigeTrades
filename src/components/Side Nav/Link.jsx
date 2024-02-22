import { ChevronsRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ name, icon: Icon, url, darkMode }) => {
  return (
    <Link to={url}>
      <li
        className={`relative group flex gap-4 buttonNav mx-auto lg:mx-2 ${
          darkMode ? "dark" : ""
        }`}
      >
        <Icon className="w-8 lg:w-4 group-hover:text-white" />
        <p className="hidden lg:inline text-black dark:text-white group-hover:text-white ">
          {name}
        </p>
        <ChevronsRight className="absolute right-2 w-4 hidden group-hover:inline group-hover:text-white" />
      </li>
    </Link>
  );
};

export default LinkButton;
