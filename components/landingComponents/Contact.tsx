import { div } from 'framer-motion/client'
import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";

const inputInfo = [
    { title: 'Full name', placeholder: 'Suraj Amgain' },
    { title: 'Email Address', placeholder: 'suraj@gmailcom' },
    { title: 'Phone no.', placeholder: 'xxxxxxxx' }
];
const displayInfo = [
    { title: 'Email', info: 'contact@yetritech.com', img: MdOutlineMail },
    { title: 'Phone', info: '+91 98765 43210', img: BsTelephone },
    { title: 'Location', info: 'BlackBuckGroup OF Technology', img: TfiLocationPin }
];

const Contact = () => {
    return (
        <div>
            <h1 className=" text-4xl text-center font-bold my-4">Get In Touch</h1>
            <div className='text-center text-xl'>Have questions? Want to schedule a business meeting? We're here to help.</div>

            <div className='flex '>
                <div className='p-4 flex flex-col gap-5 w-1/2 '>
                    {
                        inputInfo.map((item, index) => {

                            return (
                                <div className='flex flex-col gap-3' key={index}>
                                    <div>{item.title}</div>
                                    <input type="text" placeholder={item.placeholder} className='px-3 w-full text-gray-400 rounded-lg h-[40px] border' />
                                </div>
                            )
                        })
                    }
                    <h1 className='font-bold'>Inquiry Type</h1>
                    <h1 className='font-bold'>Message</h1>
                    <textarea className='bg-zinc-500 rounded-xl h-[150px]'></textarea>
                    <button className='py-4 text-xl font-semibold bg-blue-600 text-white rounded-xl'>Send message</button>
                </div>
                <div className='w-1/2 p-4 flex flex-col gap-4'>

                    <div className='p-5 bg-gray-100 border rounded-lg border-zinc-300 shadow-lg'>
                        <h1 className='font-bold text-3xl mb-4'>Contact Information</h1>

                        {
                            displayInfo.map((item, index) => {
                                const Icon = item.img;
                                return (
                                    <div className='p-4 flex items-center gap-5' key={index}>
                                        <div className=' p-3 rounded-lg bg-blue-200'>
                                            <Icon className='w-[30px] h-[30px] text-blue-600' />
                                        </div>
                                        <div>
                                            <div >{item.title}</div>
                                            <div className='w-full cursor-pointer hover:text-blue-400 '>{item.info} </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className='p-6 flex flex-col gap-4 border bg-gray-100 rounded-xl border-zinc-300 shadow-lg'>
                        <h1 className='text-2xl font-semibold'>Business Hours</h1>
                        <div className='flex justify-between'>
                            <span>Sunday-Thursday</span>
                            <span className='text-blue-500'>9:00 AM - 6:00 PM</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Friday</span>
                            <span className='text-blue-500'>10:00 AM - 4:00 PM</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Saturday</span>
                            <span className='text-blue-500'>Closed</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact