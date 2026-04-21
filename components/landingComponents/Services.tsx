import React from 'react'
const serviceData = [
    {
        title: "Device Support",
        desc: "24/7"
    },
    {
        title: "Assistance",
        desc: "AI "
    },
    {
        title: "Warranty",
        desc: "2 Years"
    },
    {
        title: "Privacy",
        desc: "100%"
    },
]
const Services = () => {
    return (
        <div>
            <div className='flex justify-between my-4 '>
                {serviceData.map((item, index) => (
                    <div key={index} className='border bg-gray-100 w-2/10 p-4 rounded-xl flex flex-col justify-evenly items-center border-white shadow-xl'>
                        <h1 className=' text-4xl font-semibold text-[#9747FF]  '>{item.desc}</h1>
                        <p className=' text-3xl'> {item.title}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Services