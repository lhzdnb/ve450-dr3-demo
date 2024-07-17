"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";
import { format } from "date-fns";

const TemperatureDifferenceChart = ({ data }) => {
  // 处理数据，添加差值字段
  const processedData = data.map((item) => ({
    time: format(new Date(item.time), "mm:ss"),
    actualTemperature: parseFloat(item.actualTemperature),
    predictedTemperature: parseFloat(item.predictedTemperature),
    difference: (
      parseFloat(item.actualTemperature) - parseFloat(item.predictedTemperature)
    ).toFixed(2),
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={processedData}
        margin={{ top: 10, right: 30, left: 20, bottom: 30 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="time"
          label={{
            value: "Time (seconds)",
            position: "insideBottomRight",
            offset: -5,
          }}
        />
        <YAxis
          domain={[14, 30]}
          label={{
            value: "Temperature (°C)",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="actualTemperature"
          stroke="#8884d8"
          fillOpacity={0.3}
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="predictedTemperature"
          stroke="#82ca9d"
          fillOpacity={0.3}
          fill="#82ca9d"
        />
        {/*{processedData.map((entry, index) => (*/}
        {/*  <ReferenceArea*/}
        {/*    key={index}*/}
        {/*    x1={index > 0 ? processedData[index - 1].time : entry.time}*/}
        {/*    x2={entry.time}*/}
        {/*    y1={Math.min(entry.actualTemperature, entry.predictedTemperature)}*/}
        {/*    y2={Math.max(entry.actualTemperature, entry.predictedTemperature)}*/}
        {/*    fill={*/}
        {/*      entry.actualTemperature > entry.predictedTemperature*/}
        {/*        ? "rgba(255, 0, 0, 0.3)"*/}
        {/*        : "rgba(0, 255, 0, 0.3)"*/}
        {/*    }*/}
        {/*    ifOverflow="extendDomain"*/}
        {/*  />*/}
        {/*))}*/}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default TemperatureDifferenceChart;
