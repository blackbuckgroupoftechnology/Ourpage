"use client";

import React from 'react';
import { FaCar, FaFileAlt } from "react-icons/fa";
import { MdSpaceDashboard, MdOutlineSecurity } from "react-icons/md";
import { MdOutlineTaxiAlert } from "react-icons/md";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FcHeatMap } from "react-icons/fc";
import { IoSettingsSharp } from "react-icons/io5";

import { FiPlus } from "react-icons/fi";
import { GoDownload } from "react-icons/go";

import Module from 'module';
import Image from 'next/image';

import { FaRegDotCircle } from "react-icons/fa";

import { FaRegUserCircle } from "react-icons/fa";

const itemList = [
  { image: MdSpaceDashboard, title: "Dashboard" },
  { image: FaFileAlt, title: "Policies" },
  { image: MdOutlineSecurity, title: "Claims" },
  { image: IoAnalyticsOutline, title: "Analytics" },
  { image: MdOutlineTaxiAlert, title: "Alert" },
  { image: IoSettingsSharp, title: "Settings" },
];
const itemList2 = [
  { image: FiPlus, title: "Add Policy" },
  { image: GoDownload, title: "Download Report" },
];

const SideNav = () => {

  return (
    <div className='border-3 h-full flex flex-col justify-evenly w-1/4 shadow-lg pt-8 border-white w-[291px]'>
      <div className='w-full border-b border-gray-300 '>
        <div className="flex items-center gap-0 cursor-pointer">
          <Image src='/yetriLogo.png' alt="YetriTechLogo" width={100} height={100} className="w-[91px] h-[69px]  object-contain" />
          <div className='flex flex-col justify-center gap-2'>
            <h1 className="text-4xl text-blue-500 font-semibold text-gray-800 size-[32px] w-full">Yetri Tech</h1>
            <h1 className='text-blue-600'>INSURANCE</h1>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          {
            itemList.map((item, index) => {
              const Icon = item.image;
              return (
                <div
                  key={index}
                  className="flex w-[238px] h-[52px] items-center gap-2 px-6 
  text-black font-semibold rounded-3xl cursor-pointer
  hover:bg-[#317FF8] hover:text-white
  hover:shadow-[0_10px_20px_rgba(0,0,0,0.25),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-4px_6px_rgba(0,0,0,0.2)]
  hover:-translate-y-1 hover:scale-[1.02]
  transition-all duration-300"
                >
                  <Icon className="" />
                  <span>{item.title}</span>
                </div>
              );
            })
          }
        </div>
      </div>
      <div className='m-8 px-5 border w-[229px] h-[92px] border-white p-2 bg-[#A5C9BE4D] blur-[.1px] font-semibold rounded-2xl flex flex-col gap-1 shadow-lg'>
        <div>Fleet Health</div>
        <div className='flex jusitfy-center items-center text-green-600'>
          <FaRegDotCircle />
          Excellent
        </div>
        <div>0.2% last month</div>
      </div>
      <div className='m-8 border w-[229px] h-[219px] border-white p-3 bg-[#D4E2F8] blur-[.1px] font-semibold rounded-2xl'>
        Quick Actions
        {
          itemList2.map((item, index) => {
            const Icon = item.image;
            return (
              <div key={index} className='my-3 rounded-xl p-2 w-[202px] h-[57px] shadow-xl border border-[#FFFFFFE8] flex items-center gap-1 hover:bg-gray-200 cursor-pointer'>
                <Icon className="text-xl text-blue-700" />
                <span>{item.title}</span>
              </div>
            );
          })
        }
      </div>
      <div className="m-8 px-2 w-[229px] h-[43px] shadow-lg  border border-white rounded-xl bg-[#EEF1FACC] flex  justify-center items-center gap-6 hover:cursor-pointer">
        <div className="flex items-center gap-2 cursor-pointer hover:underline">
          <FaRegUserCircle className="w-7 h-7 text-gray-600" />
          <div className="font-medium text-gray-700">USER NAME</div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;