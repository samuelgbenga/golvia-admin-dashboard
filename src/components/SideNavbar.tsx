import { ReactNode } from "react";
import DashbordIcon from "../assets/icons/DashbordIcon";
import GloviaLogo from "../assets/icons/GloviaLogo";
import UserEngageIcon from "../assets/icons/UserEngageIcon";
import MetricIcon from "../assets/icons/MetricIcon";
import CampaignIcon from "../assets/icons/CampaignIcon";
import ChartIcon from "../assets/icons/ChartIcon";
import RevenueIcon from "../assets/icons/RevenueIcon";
import UserIcon from "../assets/icons/UserIcon";
import AdminIcon from "../assets/icons/AdminIcon";
import ReportIcon from "../assets/icons/ReportIcon";
import avatar from "../assets/images/Avatar.png";
import ThreeDotsIcon from "../assets/icons/ThreeDotsIcon";

const sidebarItems: ListItemProps[] = [
  { icon: <DashbordIcon />, name: "Dashboard" },
  { icon: <UserEngageIcon />, name: "User Engagement" },
  { icon: <ChartIcon />, name: "Content Metric" },
  { icon: <CampaignIcon />, name: "Brand Campaigns" },
  { icon: <MetricIcon />, name: "Platform Metric" },
  { icon: <RevenueIcon />, name: "Revenue" },
  { icon: <UserIcon />, name: "User Behaviour" },
  { icon: <AdminIcon />, name: "Admin Metric" },
  { icon: <ReportIcon />, name: "Custom Report" },
];

const SideNavbar = () => {
  return (
    <div className="p-8 w-full h-full flex flex-col">
      <div className="grow-1 cursor-pointer">
        <GloviaLogo />
      </div>
      <div className="grow-2 p-2 flex flex-col gap-5">
        {sidebarItems.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </div>
      <div className="grow-1 flex gap-1 items-center">
        <div className="w-10">
          <img src={avatar} alt="avatar" className="rounded-full" />
        </div>
        <div className="text-[10px]">
          <h1 className="font-bold">Admin</h1>
          <p>admin@gol-via.com</p>
        </div>
        <div>
          <ThreeDotsIcon />
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;

interface ListItemProps {
  icon: ReactNode;
  name: string;
}

const ListItem: React.FC<ListItemProps> = ({ icon, name }) => {
  return (
    <div className="flex items-center p-1 pl-3 pr-3 gap-1 cursor-pointer delay-150 duration-300 ease-out hover:bg-blue-bg-onover hover:rounded-2xl hover:text-blue-onover ">
      {icon} {name}
    </div>
  );
};
