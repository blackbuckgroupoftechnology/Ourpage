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
        <div className="mt-5 md:w-full w-[1040px] h-[112px]  flex justify-between flex-wrap">
            {TelData.map((item, index) => {
                const Icon = item.image;

                return (
                    <div
                        key={index}
                        className="flex items-center gap-4 w-[320px] h-[111px] p-5 rounded-2xl 
                                   bg-[#EEF1FACC] backdrop-blur-md 
                                   border  border-[#FFFFFFE8]
                                   shadow-lg cursor-pointer"
                    >
                        {/* Icon */}
                        <div className="bg-blue-500 p-4 rounded-xl text-black text-2xl
                        shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-4px_6px_rgba(0,0,0,0.2)]
                        ">
                            <Icon className='text-white bg-blue-500  w-12 h-12'/>
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