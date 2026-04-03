"use client";

import React from 'react'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";

// Register components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);
import { Line, Pie } from 'react-chartjs-2';

const PieData = {
  labels: ["High Risk", "Average Risk", "Low Risk"],
  datasets: [{
    data: [10, 20, 13],
    backgroundColor: ["#faa693", "#fae993", "#8fc2f7"],
  },
  ],
};
const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
      labels: {
        color: "black",
        font: {
          size: 12,
        },
        padding: 20,
        boxWidth: 20,
        boxHeight: 20 // size of color box
      },
    },
  },
};

const lineData = {
  labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug"],
  datasets: [
    {
      label: "Sales",
      data: [10, 19, 20, 45, 42, 60, 61, 80],
      borderColor: "#8fc2f7",
      backgroundColor: "lightblue",
    },
  ],
};
const lineOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const DriverScoreCard = () => {
  return (
    <div className='border shadow-lg w-[430px] h-[435px] border-[#FFFFFFE8] bg-[#ECF0F9] px-2 rounded-2xl'>
      <div className='px-3 text-2xl py-2 font-semibold border-[#FFFFFF99] border-b '>
        Driving Score & Risk Analysis
      </div>
      <div className=' flex justify-center w-full h-[160px] '>
        <Pie options={pieOptions} data={PieData} />
      </div>
      <div className='px-3 text-2xl py-2 font-semibold border-[#FFFFFF99] border-b '>
        Average Driving last 8 months
      </div>
      <div className='flex justify-center w-full h-[160px] '>
        <Line options={lineOptions} data={lineData} />
      </div>
    </div >
  );
}

export default DriverScoreCard