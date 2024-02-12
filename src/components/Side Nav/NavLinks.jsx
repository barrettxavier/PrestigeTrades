import { Home, BarChart2, ScrollText, Waypoints } from "lucide-react";
import React from "react";
import Link from "./Link";

const NavLinks = () => {
  return (
    <ul className="flex flex-col gap-4 my-8">
      <Link link="Dashbord" icon={Home} url="/" />
      <Link link="Daily Journal" icon={BarChart2} />
      <Link link="Trade Log" icon={ScrollText} />
      <Link link="Strategies" icon={Waypoints} />
    </ul>
  );
};

export default NavLinks;
