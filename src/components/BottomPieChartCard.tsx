import React from "react";
import PieChartComponent from "./PieChartComponent";
import { data1 } from "../mockApiHooks/tableHooks";

const BottomPieChartCard = () => {
  return (
   
      <div className="flex flex-col w-full p-4">
        <div>
          <h1 className="text-lg font-bold text-black">Completion rates</h1>
          <p>See how people watched videos</p>
        </div>
        <div className="flex justify-center items-center h-[75%]">
          <PieChartComponent data={data1} centerText="Videos" />
        </div>
        <div className="grid grid-cols-2 gap-1">
          {completionRate.map((item, index) => (
            <CompletionRate key={index} {...item} />
          ))}
        </div>
      </div>
   
  );
};

export default BottomPieChartCard;

interface CompletionProps {
  name: string;
}

const completionRate: CompletionProps[] = [
  { name: "72% Completion" },
  { name: "28% Non-completion" },
];

const CompletionRate: React.FC<CompletionProps> = ({ name }) => {
  // Define a mapping of country names to colors
  const countryColors: { [key: string]: string } = {
    "72% Completion": "bg-dark-blue-80",
    "28% Non-completion": "bg-light-green-50",
  };
  // Default color if country is not found in the map
  const colorClass = countryColors[name] || "bg-gray-500";

  return (
    <div className="flex items-center gap-2 font-light text-xs">
      <div className={`${colorClass} h-3 w-3 rounded`} /> <div>{name}</div>
    </div>
  );
};
