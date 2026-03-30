"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

import { IoIosSearch } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { BsAsterisk } from "react-icons/bs";

import { RiArrowDropDownLine, RiSkullLine } from "react-icons/ri";

import yetriLogo from "@/public/yetriLogo.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 md:px-12 py-3 flex items-center justify-between">

      {/* Logo */}
      <motion.div className="flex items-center gap-2 cursor-pointer">
        <Image src={yetriLogo} alt="YetriTechLogo" className="border w-15 h-15 object-contain" />
        <h1 className="text-2xl font-semibold text-gray-800">Yetri Tech</h1>
      </motion.div>

      {/* Search Bar */}
      <motion.div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full w-64 md:w-112 transition-all duration-300 hover:shadow-md">
        <IoIosSearch className="text-gray-500 w-6 h-6" />
        <input
          type="text"
          placeholder="Search by no plates, device id"
          className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400 text-sm"
        />
      </motion.div>

      <div className='w-96 flex justify-between'>
        {/* Risk HeatMaps */}
        <motion.div className="flex items-center gap-2 bg-red-500 text-white font-semibold px-2 py-1 rounded-lg shadow-sm cursor-pointer hover:bg-red-600 transition-colors duration-300">
          <div className="w-7 h-7 flex justify-center items-center bg-white rounded-full">
            <BsAsterisk className="w-5 h-5 text-red-500" />
          </div>
          <span className='text-sm'>Risk HeatMaps</span>
        </motion.div>

        {/* Notifications & User */}
        <div className="flex items-center gap-6">
          <IoMdNotifications className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-300" />

          <motion.div className="flex items-center gap-2 cursor-pointer hover:underline">
            <FaRegUserCircle className="w-7 h-7 text-gray-600" />
            <span className="font-medium text-gray-700">USER NAME</span>
          </motion.div>

          <RiArrowDropDownLine className="w-7 h-7 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-300" />
        </div>
      </div>

    </nav>
  )
}

export default Navbar;