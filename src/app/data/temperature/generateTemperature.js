const fs = require("fs");

// 生成实际数据和预测数据
function generateBatteryTemperatureData() {
  const data = [];
  const startTime = new Date("2023-10-01T00:00:00"); // 假设从这个时间点开始
  const minutesInHour = 60;

  for (let i = 0; i < minutesInHour; i++) {
    const time = new Date(startTime.getTime() + i * 60000); // 每分钟一个数据点
    const actualTemp = 20 + Math.sin(i / 10) * 5 + Math.random() * 2; // 模拟实际温度数据
    const predictedTemp = 20 + Math.sin(i / 10) * 5 + Math.random() * 1.5; // 模拟预测温度数据

    data.push({
      time: time.toISOString(),
      actualTemperature: actualTemp.toFixed(2),
      predictedTemperature: predictedTemp.toFixed(2),
    });
  }

  return data;
}

const temperatureData = generateBatteryTemperatureData();

// 将数据写入 temperature.json 文件
fs.writeFile(
  "./src/app/data/temperature/temperature.json",
  JSON.stringify(temperatureData, null, 2),
  (err) => {
    if (err) {
      console.error("写入文件时出错:", err);
    } else {
      console.log("数据已成功写入 temperature.json 文件");
    }
  }
);
