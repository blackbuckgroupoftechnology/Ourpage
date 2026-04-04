"use client"
import React from 'react'
import { IoBicycleOutline } from "react-icons/io5";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { option } from 'framer-motion/client';
ChartJS.register(BarElement, CategoryScale, LinearScale);

const data = {
    labels: [1, 3, 4, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: "rides",
        data: [12, 19, 7,40, 5, 10, 3, 15],
        backgroundColor: "#348feb",
        borderRadius: 5
      },
    ],
  };
const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const MonthlyData = () => {
    return (
        <div className='w-[560px] h-[230px] border-[#FFFFFFE8] bg-[#ECF0F9] rounded-xl shadow-lg border'>
            <div className='flex shadow-lg rounded-xl p-2 justify-between items-center '>
                <div className=' gap-2 flex items-center'>
                    <div className='bg-blue-500 rounded-lg'>
                        <IoBicycleOutline className='text-white w-10 h-10' />
                    </div>

                    <span className='font-bold'>Monthly Riding Data</span>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xl'>7842 Rides</span>
                    <span className='text-sm'>22.3% last month</span>
                </div>
            </div>
            <div className='flex justify-center w-full h-[167px]'>
                <Bar data={data} className='w-full' options={barOptions}/>
            </div>
        </div>
    )
}

export default MonthlyData