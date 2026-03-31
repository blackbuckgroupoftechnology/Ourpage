"use client";
import React from 'react';
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { RiRouterFill } from "react-icons/ri";
import { IoDocumentText } from "react-icons/io5";
import { IoHandLeft } from "react-icons/io5";

const TelData = [
    {
        title: "Active Policies",
        image: IoShieldCheckmarkSharp,
        value: 2392
    },
    {
        title: "Active Devices",
        image: RiRouterFill,
        value: 2392
    },
    {
        title: "Total Claims",
        image: IoDocumentText,
        value: 2392
    }
];

const GenTelematics = () => {
    return (
        <div className="mt-5 w-full flex justify-evenly flex-wrap gap-6">
            {TelData.map((item, index) => {
                const Icon = item.image;

                return (
                    <div
                        key={index}
                        className="flex items-center gap-4 w-[260px] p-5 rounded-2xl 
                                   bg-white/5 backdrop-blur-md 
                                   border border-white/10 
                                   shadow-lg hover:shadow-xl 
                                   transition-all duration-300 
                                   hover:-translate-y-1 cursor-pointer"
                    >
                        {/* Icon */}
                        <div className="bg-blue-500 p-4 rounded-xl text-black text-2xl">
                            <Icon className='text-white bg-blue-500 rounded w-12 h-12'/>
                        </div>

                        {/* Text */}
                        <div className="flex flex-col">
                            <span className="text-sm ">
                                {item.title}
                            </span>
                            <span className="text-4xl font-semibold">
                                {item.value}
                            </span>
                            
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default GenTelematics;