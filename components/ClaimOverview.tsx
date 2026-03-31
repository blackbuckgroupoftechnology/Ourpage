import React from 'react'
import Image from 'next/image';
import yetriLogo from "@/public/yetriLogo.png";
import map from "@/public/map.png";
import { CiUser } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";


const ClaimOverview = () => {
    return (
        <div className='m-4 border w-1/2 rounded-2xl'>
            <div className='flex p-5  justify-between  items-center'>
            <h1 className='text-3xl'>claim overview</h1>
            <p className='text-blue-500'>View</p>
            </div>
            {[1, 2, 3].map((item, index) => {
                return (
                    <div key={index} className='border border-gray-400 rounded-xl p-3 flex justify-between items-center'>
                        <CiUser className='text-blue-500 w-10 h-10' />
                        <div className=' flex flex-col gap-2 items-center justify-center'>
                            <h1>User....</h1>
                            <h1 className=' text-gray-500 text-sm'>May-11 2026</h1>
                        </div>
                        <div>
                            <Image src={map} alt="map" className=' border-black rounded-xl w-30 h-20 object-cover' />
                        </div>
                        <div>
                            <FaPlay className='text-blue-500 w-7 h-7' />
                            <span className='text-sm'>Affect Part Front side</span>
                        </div>
                        <div>
                            <button className='w-full px-5 border rounded-lg'>view Detail</button><br />
                            <button className='w-full px-5 border bg-blue-500 text-white rounded-lg'>Approved</button>
                        </div>
                    </div>
                )
            })}
    </div>
    )
}

export default ClaimOverview