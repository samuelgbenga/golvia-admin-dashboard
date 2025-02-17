import React from "react";
import { PieChart, Pie, Cell, Tooltip} from "recharts";
import { PieChartProps } from "../mockApiHooks/tableHooks";


const PieChartComponent: React.FC<PieChartProps> = ({data, cx = 190, cy = 120, iR = 80, oR = 140, centerText}) => {
  return (
    <PieChart width={400} height={260}>
      <Pie
        data={data}
        cx={cx} // X-axis center
        cy={cy} // Y-axis center
        innerRadius={iR} // Inner radius for donut style
        outerRadius={oR} // Outer radius for wide pie
        startAngle={0}  // Start angle for smooth packing
        endAngle={360}      // End angle for smooth packing
        paddingAngle={0}  // No space between segments
        dataKey="value"
        stroke="none"     // Remove stroke (border) between segments
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip/>
       {/* Render center text if provided */}
       {centerText && (
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={24}
          fontWeight="bold"
          fill="#333"
        >
          {centerText}
        </text>
      )}
    </PieChart>
  );
};

export default PieChartComponent;
