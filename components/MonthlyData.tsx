"use state"
import React from 'react'
import { IoBicycleOutline } from "react-icons/io5";


const MonthlyData = () => {
    return (
        <div className='m-4 px-2 w-1/2 h-15 rounded-xl border'>
            <div className='flex justify-between items-center '>
                <div className=' gap-2 flex items-center'>
                    <div className='bg-blue-500 rounded-lg'>
                        <IoBicycleOutline className='text-white w-10 h-10' />
                    </div>

                    <span className='font-bold'>Monthly Riding Data</span>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xl'>7842 Rides</span>
                    <span className='text-sm'>22.3% last month</span>
                </div>
            </div>
            <div>
                Graph
            </div>
        </div>
    )
}

export default MonthlyData