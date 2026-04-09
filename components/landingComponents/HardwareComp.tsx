import React from 'react'
import Image from 'next/image'

import { FaMicrochip } from "react-icons/fa";
import { TbGps } from "react-icons/tb";
import { MdOutlineSensors } from "react-icons/md";
import { PiCassetteTapeBold } from "react-icons/pi";
import { SiRelay } from "react-icons/si";
import { LuHdmiPort } from "react-icons/lu";


import { img } from 'framer-motion/client';


const BenifitData = [
    {
        title: "Micro Controller",
        img: FaMicrochip,
    },
    {
        title: "GPS/Baidu",
        img: TbGps,
    },
    {
        title: "IMU Sensor",
        img: MdOutlineSensors,
    },
    {
        title: "IP-68 Casing",
        img: PiCassetteTapeBold,
    },
    {
        title: "Relay System",
        img: SiRelay,
    },
    {
        title: "OBD-II Port",
        img: LuHdmiPort,
    }
]

const HardwareCom = () => {
    return (
        <div className=''>
            <div className='flex justify-center items-center'>
                <div className='p-4 my-4 w-96 border rounded-2xl text-center text-[#9747FF] font-bold border-white text-3xl '>Hardware Composition</div>
            </div>
            <div className='border p-4 rounded-2xl flex flex-col-2 justify-evenly items-center border-white shadow-xl'>                
                {
                BenifitData.map((item, index) => {
                    const Icon = item.img;
                    return (
                        <div key={index} className='p-4 rounded-lg flex flex-col items-center justify-center border border-white shadow-xl'>
                            <Icon className='w-20 h-20 text-blue-500' />
                            {/* <FaUser className='w-20 h-20 text-blue-500' /> */}
                            <h1>{item.title}</h1>
                            <span className='text-gray-500 cursor-pointer'>More Info</span>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default HardwareCom