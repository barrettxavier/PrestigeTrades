import { Home, BarChart2, ScrollText, Waypoints } from "lucide-react";
import LinkButton from "./Link";

const NavLinks = ({ darkMode }) => {
  return (
    <ul className="flex flex-col gap-2 my-8">
      <LinkButton
        name="Dashbord"
        icon={Home}
        url="/dashboard"
        darkMode={darkMode}
      />
      <LinkButton name="Daily Journal" icon={BarChart2} url="/dailyjournal" />
      <LinkButton name="Trade Log" icon={ScrollText} url="/tradelog" />
      <LinkButton name="Strategies" icon={Waypoints} />
    </ul>
  );
};

export default NavLinks;
