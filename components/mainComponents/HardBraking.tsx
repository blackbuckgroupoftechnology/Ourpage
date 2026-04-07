"use client";
import React from "react";
import { VscDebugBreakpointConditional } from "react-icons/vsc";
import { CiCircleInfo } from "react-icons/ci";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

// 🔹 Your data
const brkData = [
  {
    id: 1,
    speed: "0-30 km/h",
    val1: 100,
    val2: 30,
    val3: 13,
  },
  {
    id: 2,
    speed: "30-60 km/h",
    val1: 55,
    val2: 50,
    val3: 109,
  },
  {
    id: 3,
    speed: "60+ km/h",
    val1: 10,
    val2: 20,
    val3: 108,
  },
];

// 🔹 Function to generate chart data dynamically
const getChartData = (item: any) => {
  const total = item.val1 + item.val2 + item.val3;

  return {
    labels: ["Risk Level"],
    datasets: [
      {
        label: "Low",
        data: [(item.val1 / total) * 100],
        backgroundColor: "#9CA3AF", // gray
        // borderRadius: 8,
        borderSkipped: false,
      },
      {
        label: "Medium",
        data: [(item.val2 / total) * 100],
        backgroundColor: "#60A5FA", // light blue
        // borderRadius: 8,
        borderSkipped: false,
      },
      {
        label: "High",
        data: [(item.val3 / total) * 100],
        backgroundColor: "#2563EB", // blue
        // borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };
};

// 🔹 Chart options
const options = {
  indexAxis: "y" as const,
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      max: 100,
      display: false,
    },
    y: {
      stacked: true,
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
};

const HardBraking = () => {
  return (
    <div className="mr-4 w-full shadow-xl max-w-[430px] h-auto border border-[#FFFFFFE8] bg-[#ECF0F9] rounded-xl ">

      {/* Title */}
      <div className="shadow-md rounded-xl p-3 font-semibold flex justify-between items-center text-xl md:text-xl p-3">
        <div className="flex items-center gap-1">
          Hard Braking Events

          <CiCircleInfo className="text-gray-400" />
        </div>
        <div className=" flex items-center gap-1 text-sm">
          <div className="w-3  h-3 bg-blue-400 rounded-full"></div>
          This month
        </div>

      </div>


      {/* Data Rows */}
      <div className=" ">
        {brkData.map((item) => (
          <div
            key={item.id}
            className=" flex items-center w-full"
          >
            {/* Icon */}
            <VscDebugBreakpointConditional className=" w-6 h-6 md:w-8 md:h-8 text-red-500" />

            {/* Speed Label */}
            <div className=" text-sm md:text-base font-semibold w-[50px]">
              {item.speed}
            </div>

            {/* Chart */}
            <div className="flex-1 h-[35px]">
              <Bar data={getChartData(item)} className="" options={options} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HardBraking;