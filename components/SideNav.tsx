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
import yetriLogo from "@/public/yetriLogo.png";

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
    <div className='border w-1/4 border-gray-300 h-[100vh]'>
      <div className='w-full border-b border-gray-300 '>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src={yetriLogo} alt="YetriTechLogo" className="border w-15 h-15 object-contain" />
          <div>
            <h1 className="text-2xl text-blue-500 font-semibold text-gray-800">Yetri Tech</h1>
            <h1 className='text-blue-600'>Insurance</h1>
          </div>
        </div>
        {
          itemList.map((item, index) => {
            const Icon = item.image;
            return (
              <div key={index} className='flex text-gray-500 items-center gap-2 px-6 p-3 hover:bg-gray-200 cursor-pointer'>
                <Icon className="text-xl" />
                <span>{item.title}</span>
              </div>
            );
          })
        }
      </div>
      <div className='m-8 border border-white p-3 bg-blue-100 font-bold rounded-xl'>
        Quick Actions
        {
          itemList2.map((item, index) => {
            const Icon = item.image;
            return (
              <div key={index} className='my-3 rounded-xl p-2 border border-white flex items-center gap-1 hover:bg-gray-200 cursor-pointer'>
                <Icon className="text-xl text-blue-700" />
                <span>{item.title}</span>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default SideNav;