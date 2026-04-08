import React from 'react'
import Image from 'next/image'

const Nav = () => {
    return (
        <div className='border px-2 flex justify-between items-center rounded-2xl shadow-xl border-white'>
            <div className='flex gap-2 cursor-pointer'>
                <Image src="/YetriLOGO.png" alt="Landing Image" width={50} height={10} className='border-red-300 rounded-lg' />
                <div>
                    <h1 className='text-[#0649B3] text-3xl font-bold'>YetriTECH</h1>
                    <p className='text-[#5793C6] text-sm'>Developed by BlackBuck</p>
                </div>

            </div>
            <div className='w-3/5  flex justify-between items-center'>

                <div className='w-1/2 flex justify-between'>
                    {
                        ['About', 'Product', 'Team', 'Partners', 'Contact Us'].map((item, index) => (
                            // <div key={index} className='border '>
                                <p key={index} className='text-lg cursor-pointer'> {item}</p>
                            // </div>
                        ))
                    }
                </div>
                <div className='w-1/4 flex justify-between'>
                    {
                        ['Order now', 'Login'].map((item, index) => (
                            <p key={index} className=' px-2 text-xl rounded-xl bg-[#0649B3] flex justify-center items-center gap-2 text-white h-10 cursor-pointer'>{item}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Nav