import {
  Overview,
  Market,
  Portfolio,
  Community,
  Report,
  Settings,
} from "@/public/assets/svgsIcons";

type sidebarTypes = {
  icon?: JSX.Element | React.ReactNode;
  url: string;
  name?: string;
  color?: boolean;
};

const sidebar: sidebarTypes[] = [
  {
    icon: <Overview />,
    name: "Dashboard",
    url: "/",
    color: false,
  },
  {
    icon: <Market />,
    name: "Market",
    url: "/market",
    color: true,
  },
  {
    icon: <Portfolio />,
    name: "Portfolio",
    url: "/portfolio",
    color: false,
  },

  {
    icon: <Community />,
    name: "Community",
    url: "/community",
    color: false,
  },
  {
    icon: <Report />,
    name: "Report",
    url: "/report",
    color: false,
  },
  {
    icon: <Settings />,
    name: "Settings",
    url: "/settings",
    color: false,
  },
];

export default sidebar;
