"use client"
import React from 'react'
import { HiArrowUpRight } from "react-icons/hi2";
import Image from 'next/image';

import { FaCalendarAlt } from "react-icons/fa";


// import hand from '@public/hand.png';

const InitialLanding = () => {
  return (
    <div className='flex flex-col gap-7 py-4'>
      <div>
        <span className='text-[#5793C6] text-4xl'>An intelligent mobility ecosystem combining </span>
        <span className='border border-white text-[#E031F0] shadow-xl text-4xl rounded-xl '>Tracking</span>
      </div>

      <div className='flex'>
        <div className='border w-4/5'>
          <div>
            <h1 className='text-5xl'>
              Smart Mobility.
            </h1>
            <h1 className='text-5xl'>
              Safer Journeys.
            </h1>
          </div>
          <p className='text-xl font-bold'>YatriTECH brings intelligence to every vehicle from
            private cars to public buses, ambulances,
            fleets and government vehicle</p>

          <ul className='list-disc pl-4'>
            <li>Track every vehicle in real-time with precision GPS technology</li>
            <li>Protect your fleet with AI-powered safety alerts and crash detection</li>
            <li>Empower passengers with live bus tracking and route information</li>
            <li>Monitor driver behavior and optimize routes for maximum efficiency</li>
            <li>Activates Use-Based-Insurance and get rewards in safe driving</li>
            <li>AI-Assistance for promotion of safe driving </li>
          </ul>
        </div>
        <div className='border w-1/5 relative'>
          <Image src='/hand.png' height={300} width={300} alt='Hand gesture illustration' className='relative border border-black right-0' />
        </div>
      </div>

      <div className='flex justify-evenly items-center'>
        <button className='p-2 w-2/8 text-2xl font-semibold text-white bg-[#0649B3] flex justify-center rounded-xl items-center gap-3 cursor-pointer'>
          OPEN ORDER
          <HiArrowUpRight className='text-2xl'/>
        </button>
        <button className='p-2 w-2/8 text-2xl font-semibold text-[#9747FF] border flex justify-center items-center gap-2 border-white rounded-xl cursor-pointer'>
          <FaCalendarAlt />
          Schedule a Meeting
        </button>
      </div>
    </div>
  )
}

export default InitialLanding