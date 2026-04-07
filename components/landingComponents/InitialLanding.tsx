import React from 'react'
import { HiArrowUpRight } from "react-icons/hi2";


const InitialLanding = () => {
  return (
    <div>
        <div className='flex justify-evenly items-center'>
                <button className='p-2 border flex justify-center rounded items-center gap-3'>
                    OPEN ORDER
                    <HiArrowUpRight />
                </button>
                <button className='p-2 border rounded'>Schedule a Meeting</button>
            </div>
    </div>
  )
}

export default InitialLanding