"use client";
import { useEffect, useState } from "react";
import TemperatureDifferenceChart from "./components/TemperatureDifferenceChart";
import VoltageDifferenceChart from "./components/VoltageDifferenceChart";
import CurrentDifferenceChart from "./components/CurrentDifferenceChart";

export default function Home() {
  const [temperatureData, setTemperatureData] = useState([]);
  const [voltageData, setVoltageData] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  const readData = (fileName) => {
    fetch(`./data/${fileName}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("读取失败");
        }
        return response.json();
      })
      .then((jsonData) => {
        console.log(jsonData);

        if (fileName === "temperature") {
          setTemperatureData(jsonData);
        } else if (fileName === "voltage") {
          setVoltageData(jsonData);
        } else {
          setCurrentData(jsonData);
        }
      });
  };

  useEffect(() => {
    readData("temperature");
    readData("voltage");
    readData("current");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-20">
      <header className="w-full text-center mb-16">
        <h1 className="text-4xl font-bold text-white">
          Group 3 DR3 Data Visualization Demo
        </h1>
      </header>
      <div className="flex flex-col w-full gap-16 max-w-[1400px]">
        <GridItem title="Temperature">
          <TemperatureDifferenceChart data={temperatureData} />
        </GridItem>
        <GridItem title="Voltage">
          <VoltageDifferenceChart data={voltageData} />
        </GridItem>
        <GridItem title="Current">
          <CurrentDifferenceChart data={currentData} />
        </GridItem>
      </div>
    </main>
  );
}

function GridItem({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 border border-slate-900 bg-slate-900/50 rounded-xl w-full max-w-[1200px] mx-auto h-[500px]">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <div className="w-full h-full">{children}</div>
    </div>
  );
}
