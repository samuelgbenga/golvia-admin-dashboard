import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Cell
} from "recharts";

// Define the type for chart data
interface ChartData {
  name: string;
  value: number;
  color: string;
}

// Define the props type
interface CustomBarChartProps {
  data: ChartData[];
}

const CustomBarChart: React.FC<CustomBarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} barSize={85}>
        <CartesianGrid stroke="#2B2E3114" vertical={false} x={118} width={520} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tick={{ dy: 5 }} // Adjust label positioning
          tickLine={false}
          padding={{ left: 40, right: 40 }} // Ensures bars are spaced correctly
        />
        <YAxis
          domain={[0, 100]}
          tickCount={6} // Labels at 0, 20, 40, etc.
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => `${value}k`}
        />
        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
        <Tooltip
         cursor={{ fill: "rgba(0, 0, 0, 0)" }} // Highlight bar on hover
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
