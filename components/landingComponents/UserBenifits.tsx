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
            <div className='p-4 w-96 border rounded-xl text-center text-2xl '>Multi User Benefits</div>
            </div>
            <div className='border flex justify-evenly items-center'>
                {
                    BenifitData.map((item, index) => {
                        const Icon = item.img;
                        return (
                            <div key={index} className='p-4 rounded-lg flex flex-col items-center justify-center border'>
                                <Icon className='w-20 h-20 text-blue-500' />
                                {/* <FaUser className='w-20 h-20 text-blue-500' /> */}
                                <h1>{item.title}</h1>
                                <span>More Info</span>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default UserBenifits