import React from "react";
import PieChartComponent from "./PieChartComponent";
import { data } from "../mockApiHooks/tableHooks";

const PieChartCard = () => {
  return (
    <div className="flex flex-col w-full p-4">
      <div>
        <h1 className="text-3xl font-bold text-black">705</h1>
        <p>Posts in total from 80 countries</p>
      </div>
      <div className="flex justify-center items-center h-[60%]">
        <PieChartComponent data={data} centerText="Countries"  />
      </div>
      <div className="grid grid-cols-2 gap-1">
        {countries.map((item, index) => (
          <Countries key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PieChartCard;

interface CountriesProps {
  name: string;
}

const countries: CountriesProps[] = [
  { name: "Nigeria" },
  { name: "Ghana" },
  { name: "Ivory Coast" },
  { name: "Cameroon" },
  { name: "Others" },
];

const Countries: React.FC<CountriesProps> = ({ name }) => {
  // Define a mapping of country names to colors
  const countryColors: { [key: string]: string } = {
    Nigeria: "bg-dark-blue-80",
    Ghana: "bg-light-green-50",
    "Ivory Coast": "bg-purple",
    Cameroon: "bg-orange",
    Others: "bg-dark-blue-100",
  };
  // Default color if country is not found in the map
  const colorClass = countryColors[name] || "bg-gray-500";

  return (
    <div className="flex items-center gap-2 font-light">
      <div className={`${colorClass} h-3 w-3 rounded`} /> <div>{name}</div>
    </div>
  );
};
