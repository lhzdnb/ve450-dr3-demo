"use client";

import React from "react";
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

const VoltageDifferenceChart = ({ data }) => {
  // 处理数据，添加差值字段
  const processedData = data.map((item) => ({
    time: format(new Date(item.time), "mm:ss"),
    actualVoltage: parseFloat(item.actualVoltage),
    predictedVoltage: parseFloat(item.predictedVoltage),
    difference: (
      parseFloat(item.actualVoltage) - parseFloat(item.predictedVoltage)
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
          domain={[300, 500]}
          label={{ value: "Voltage (V)", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="actualVoltage"
          stroke="#8884d8"
          fillOpacity={0.3}
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="predictedVoltage"
          stroke="#82ca9d"
          fillOpacity={0.3}
          fill="#82ca9d"
        />
        {/*{processedData.map((entry, index) => (*/}
        {/*  <ReferenceArea*/}
        {/*    key={index}*/}
        {/*    x1={index > 0 ? processedData[index - 1].time : entry.time}*/}
        {/*    x2={entry.time}*/}
        {/*    y1={Math.min(entry.actualVoltage, entry.predictedVoltage)}*/}
        {/*    y2={Math.max(entry.actualVoltage, entry.predictedVoltage)}*/}
        {/*    fill={*/}
        {/*      entry.actualVoltage > entry.predictedVoltage*/}
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

export default VoltageDifferenceChart;
