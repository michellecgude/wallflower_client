import React, { useState, useEffect } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Happy", value: 400 },
  { name: "Comfortable", value: 300 },
  { name: "Calm", value: 300 },
  { name: "Content", value: 200 },
  { name: "Neutral", value: 200 },
  { name: "Anxious", value: 400 },
  { name: "Sad", value: 300 },
  { name: "Stressed", value: 300 },
  { name: "Overwhelmed", value: 200 },
  { name: "Tired", value: 200 },
];

const COLORS = [
  "#EBF0CD", // happy
  "#F4E3CC", // comfortable
  "#DFE2E7", // calm
  "#EEE0F2", // content
  "#D4E9D2", // neutral
  "#F4DAD7", // anxious
  "#DEDEDE", // sad
  "#F9E8EE", // stressed
  "#FFE2D8", // overwhelmed
  "#CDCDCD", // tired
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function MoodChart() {
  const [mood, setMood] = useState({
    id: "",
    user: "",
    name: "",
    created_at: "",
    note_entry: "",
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width="100%" height="100%">
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
