import React from 'react'
import Image from 'next/image'

import { FaUser } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import { RiGovernmentFill } from "react-icons/ri";
import { MdEmojiTransportation } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";


import { img } from 'framer-motion/client';


const BenifitData = [
    {   title: "General User",
        img: FaUser,
    },
    {
        title: "Private Vehicles",
        img: RiMotorbikeFill,
    },
    {
        title: "Government",
        img: RiGovernmentFill,
    },
    {
        title: "Public Transport",
        img: MdEmojiTransportation,
    },
    {
        title:"Business",
        img: FaBusinessTime,
    },
    {
        title: "Emergency Services",
        img:FaAmbulance,
    }
]

const UserBenifits = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
            <div className='p-4 my-4 w-96 border rounded-2xl text-center text-[#9747FF] font-bold border-white text-3xl '>Multi User Benefits</div>
            </div>
            <div className='border bg-gray-100 p-4 rounded-2xl flex justify-evenly border-white shadow-xl'>
                {
                    BenifitData.map((item, index) => {
                        const Icon = item.img;
                        return (
                            <div key={index} className='p-4 bg-white rounded-lg flex flex-col justify-center border border-white shadow-xl'>
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

export default UserBenifits