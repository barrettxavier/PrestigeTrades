import { ChevronsRight } from "lucide-react";
import React from "react";

const Link = ({ link, icon: Icon, url }) => {
  return (
    <li className="relative group flex gap-4 buttonNav">
      <Icon className="w-4 group-hover:text-white" />
      <a className="hidden lg:inline group-hover:text-white " href={url}>
        {link}
      </a>
      <ChevronsRight className="absolute -right-6 w-4 hidden group-hover:inline group-hover:text-slate-600" />
    </li>
  );
};

export default Link;
