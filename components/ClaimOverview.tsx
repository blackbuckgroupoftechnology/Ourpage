"use client"
import React from 'react'
import Image from 'next/image';
import yetriLogo from "@/public/yetriLogo.png";
import { FaArrowRightLong } from "react-icons/fa6";

import map from "@/public/map.png";
import { CiUser } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";

const data = [
    {   user: "User1",
        date: "May-11 2026",
    },
    {   user: "User2",
        date: "May-12 2026",
    },
    {   user: "User3",
        date: "May-13 2026",
    },
]

const ClaimOverview = () => {
    return (
        <div className='border shadow-lg w-[560px] h-[435px] border-[#FFFFFFE8] bg-[#ECF0F9] rounded-2xl'>
            <div className='flex p-5  justify-between  items-center'>
                <h1 className='text-3xl'>claim overview</h1>
                <div className='flex items-center gap-2 text-blue-500 hover:cursor-pointer'>View All
                    <FaArrowRightLong />
                </div>
            </div>
            <div className='h-[360px] flex flex-col justify-between'>
                {data.map((item, index) => {
                    return (
                        <div key={index} className='rounded-xl border border-white shadow-xl h-[97px] p-3 flex justify-between items-center'>
                            <div className='bg-blue-500 text-white rounded-full w-14 h-14 flex justify-center items-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-4px_6px_rgba(0,0,0,0.2)]'>
                            <CiUser className='w-10 h-10' />
                            </div>
                            <div className=' flex flex-col gap-2 items-center justify-center'>
                                <h1>{item.user}</h1>
                                <h1 className=' text-gray-500 text-sm'>{item.date}</h1>
                            </div>
                            <div>
                                <Image src={map} alt="map" className=' border-black rounded-xl w-30 h-20 object-cover' />
                            </div>
                            <div>
                                <FaPlay className='text-blue-500 w-7 h-7' />
                                <span className='text-sm'>Affect Part Front side</span>
                            </div>
                            <div className='h-[100px] flex flex-col justify-center items-center'>
                                <button className='w-full px-5 border border-[#FFFFFF99] rounded-lg shadow-lg'>view Detail</button><br />
                                <button className='w-full px-5 bg-[#317FF8] text-white rounded-lg'>Approved</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ClaimOverview