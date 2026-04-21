"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { HiArrowUpRight } from "react-icons/hi2"
import { FaCalendarAlt } from "react-icons/fa"

const features = ["Tracking", "Safety", "AI assistance", "Traffic Optimization", "Complete Vehicle Intelligence"]

const InitialLanding = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length)
    }, 1200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full py-5 ">

      {/* rotating feature line */}
      <div className="mb-5">
        <span className="text-[#5793C6] text-xl md:text-2xl font-medium">
          An intelligent mobility ecosystem combining{" "}
        </span>

        <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#0B2FA6] to-[#F512F1] bg-clip-text text-transparent">
          {features[index]}
        </span>
      </div>

      {/* main section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* left content */}
        <div className="flex flex-col justify-between h-full flex-1">

          <div className="space-y-6">

            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#0B2FA6] to-[#F512F1] bg-clip-text text-transparent">
                  Smart Mobility.
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#0B2FA6] to-[#F512F1] bg-clip-text text-transparent">
                  Safer Journeys.
                </span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-gray-700 font-medium">
              YatriTECH brings intelligence to every vehicle from
              private cars to public buses, ambulances,
              fleets and government vehicle
            </p>

            <ul className="list-disc pl-5 space-y-3 text-lg md:text-xl text-gray-800">
              <li>Track every vehicle in real-time with precision GPS technology</li>
              <li>Protect your fleet with AI-powered safety alerts and crash detection</li>
              <li>Empower passengers with live bus tracking and route information</li>
              <li>Monitor driver behavior and optimize routes for maximum efficiency</li>
            </ul>

          </div>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <button className="flex-1 py-3 text-lg font-semibold text-white bg-[#0649B3] rounded-xl shadow-md flex justify-center items-center gap-3 hover:scale-[1.02] transition">
              OPEN ORDER
              <HiArrowUpRight className="text-xl" />
            </button>

            <button className="flex-1 py-3 text-lg font-semibold text-[#9747FF] bg-gray-100 border border-gray-200 rounded-xl shadow-md flex justify-center items-center gap-2 hover:scale-[1.02] transition">
              <FaCalendarAlt />
              Schedule a Meeting
            </button>

          </div>
        </div>

        {/* right image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <Image
              src="/hand.png"
              height={500}
              width={500}
              alt="Hand gesture illustration"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default InitialLanding