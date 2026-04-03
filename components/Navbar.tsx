"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

import { IoIosSearch } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

import { RiArrowDropDownLine, RiSkullLine } from "react-icons/ri";

import yetriLogo from "@/public/yetriLogo.png";

const Navbar = () => {
  return (
    <nav className="w-[1039px] h-[44px] mt-5 flex items-center justify-between">

      {/* Search Bar */}
      <motion.div className="flex items-center shadow-lg gap-2 bg-gray-100 px-4 py-2 rounded-full w-[446px] md:w-112 transition-all duration-300 hover:shadow-md">
        <IoIosSearch className="text-gray-500 w-6 h-6" />
        <input
          type="text"
          placeholder="Search specific vehicle"
          className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400 text-sm"
        />
      </motion.div>

        {/* Risk HeatMaps */}
        <motion.div className=" w-[200px] h-[43px] border  border-[#FFFFFFE8] flex items-center gap-2 bg-[#EEF1FACC] text-white font-semibold px-2 py-1 rounded-lg shadow-lg cursor-pointer ">
            <FaCalendarAlt className="w-5 h-5 text-[#43536B] " />
          <span className='text-sm text-[#43536B]'>20 March 2026</span>
        </motion.div>
        <div className=' w-[45px] h-[43px] rounded-xl border shadow-lg border-white rounded-xl bg-[#EEF1FACC] flex justify-center items-center'>
          <IoMdNotifications className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-300" />
        </div>
        {/* Notifications & User */}
        <div className="px-2 w-[253px] h-[43px] shadow-lg  border border-white rounded-xl bg-[#EEF1FACC] flex  justify-center items-center gap-6">

          <motion.div className="flex items-center gap-2 cursor-pointer hover:underline">
            <FaRegUserCircle className="w-7 h-7 text-gray-600" />
            <span className="font-medium text-gray-700">USER NAME</span>
          </motion.div>

          <RiArrowDropDownLine className="w-7 h-7 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-300" />
        </div>

    </nav>
  )
}

export default Navbar;