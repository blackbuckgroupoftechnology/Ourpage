"use client";

import React from 'react';
import { FaCar, FaFileAlt } from "react-icons/fa";
import { MdSpaceDashboard, MdOutlineSecurity } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FcHeatMap } from "react-icons/fc";
import { IoSettingsSharp } from "react-icons/io5";
import { FaHeadset } from "react-icons/fa";


import { div } from 'framer-motion/client';

const SideNav = () => {

  const itemList = [
    { image: MdSpaceDashboard, title: "Dashboard" },
    { image: IoMdSearch, title: "Search and Lookup" },
    { image: FaCar, title: "Vehicle" },
    { image: MdOutlineSecurity, title: "Claims" },
    { image: FaFileAlt, title: "Policies" },
    { image: IoAnalyticsOutline, title: "Analytics" },
    { image: FcHeatMap, title: "Risk Heat Maps" }
  ];
  const itemList2 = [
    { image: IoSettingsSharp, title: "Settings" },
    { image: FaHeadset, title: "Help & Support" },
  ];
  return (
    <div className='border border-gray-300 h-[100vh]'>
      <div className='w-full border-b border-gray-300 '>
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
      <div>
        {
          itemList2.map((item, index) => {
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
    </div>
  );
};

export default SideNav;