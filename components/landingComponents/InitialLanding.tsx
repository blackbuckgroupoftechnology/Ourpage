"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image';

import { HiArrowUpRight } from "react-icons/hi2";
import { FaCalendarAlt } from "react-icons/fa";

const features = ["Tracking", "Safety", "AI assistance", "Traffic Optimization", "Complete Vehicle Intelligence"]

const InitialLanding = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 800); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='flex flex-col py-4'>
      <div className='py-5'>
        <span className='text-[#5793C6] text-4xl'>An intelligent mobility ecosystem combining </span>
        <span className='text-3xl bg-gradient-to-r from-[#0B2FA6] to-[#F512F1] bg-clip-text text-transparent text-3xl font-bold font-bold'>{features[index]}</span>
      </div>

      <div className='h-[600px] flex flex-col justify-between relative'>
        <div className='flex flex-col gap-6 px-10 w-6/8'>
          <div className=''>
            <span className='text-5xl bg-gradient-to-r from-[#0B2FA6] to-[#F512F1] bg-clip-text text-transparent font-bold font-bold'>
              Smart Mobility.
            </span><br /><br />
            <span className='text-5xl bg-gradient-to-r from-[#0B2FA6] to-[#F512F1] bg-clip-text text-transparent font-bold font-bold'>
              Safer Journeys.
            </span>
          </div>
          <p className='text-3xl font-bold'>YatriTECH brings intelligence to every vehicle from
            private cars to public buses, ambulances,
            fleets and government vehicle</p>

          <ul className='list-disc pl-7 text-2xl font-semibold'>
            <li>Track every vehicle in real-time with precision GPS technology</li>
            <li>Protect your fleet with AI-powered safety alerts and crash detection</li>
            <li>Empower passengers with live bus tracking and route information</li>
            <li>Monitor driver behavior and optimize routes for maximum efficiency</li>
            <li>Activates Use-Based-Insurance and get rewards in safe driving</li>
            <li>AI-Assistance for promotion of safe driving </li>
          </ul>
        </div>

        <div className='w-6/8 flex justify-evenly items-center'>
          <button className='p-2 w-3/8 text-2xl shadow-xl font-semibold text-white bg-[#0649B3] flex justify-center rounded-xl items-center gap-3 cursor-pointer'>
            OPEN ORDER
            <HiArrowUpRight className='text-2xl' />
          </button>
          <button className='p-2 w-3/8 text-2xl shadow-xl font-semibold text-[#9747FF] border flex justify-center items-center gap-2 border-white rounded-xl cursor-pointer'>
            <FaCalendarAlt />
            Schedule a Meeting
          </button>
        </div>

        <div className='w-2/6 '>
          <Image src='/hand.png' height={300} width={400} alt='Hand gesture illustration' className=' absolute right-[10px] top-[-28px]' />
        </div>
      </div>


    </div>
  )
}

export default InitialLanding