const fs = require("fs");

// 生成实际数据和预测数据
function generateBatteryCurrentData() {
  const data = [];
  const startTime = new Date("2023-10-01T00:00:00"); // 假设从这个时间点开始
  const minutesInHour = 60;

  for (let i = 0; i < minutesInHour; i++) {
    const time = new Date(startTime.getTime() + i * 60000); // 每分钟一个数据点
    const actualCurrent = 200 + Math.sin(i / 10) * 50 + Math.random() * 20; // 模拟实际电流数据
    const predictedCurrent = 200 + Math.sin(i / 10) * 50 + Math.random() * 15; // 模拟预测电流数据

    data.push({
      time: time.toISOString(),
      actualCurrent: actualCurrent.toFixed(2) + " A", // 添加单位
      predictedCurrent: predictedCurrent.toFixed(2) + " A", // 添加单位
    });
  }

  return data;
}

const currentData = generateBatteryCurrentData();

// 将数据写入 current.json 文件
fs.writeFile(
  "./src/app/data/current/current.json",
  JSON.stringify(currentData, null, 2),
  (err) => {
    if (err) {
      console.error("写入文件时出错:", err);
    } else {
      console.log("数据已成功写入 current.json 文件");
    }
  }
);
