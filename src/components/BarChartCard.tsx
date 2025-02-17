import React from "react";
import CustomBarChart from "./CustomBarChart";
import SortIcon from "../assets/icons/SortIcon";

const chartData = [
  { name: "Views", value: 95, color: "#142467" },
  { name: "Likes", value: 30, color: "#2B4AA1" },
  { name: "Creatives", value: 70, color: "#5179D6" },
  { name: "Comments", value: 55, color: "#8DB0EC" },
  { name: "Shares", value: 79, color: "#A8CEFA" },
];

const BarChartCard: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between p-4 pl-8 pr-8">
        <h1 className="text-black text-2xl font-semibold">User Engagements</h1>
        <button className="flex items-center gap-2 ml-1 border border-gray-300 pl-2 pr-2 rounded-lg">
          Jan 01 - Jan 07 <SortIcon />
        </button>
      </div>

      <CustomBarChart data={chartData} />
    </div>
  );
};

export default BarChartCard;
