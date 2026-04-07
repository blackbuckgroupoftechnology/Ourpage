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
            <div className='flex justify-evenly border'>
                {serviceData.map((item, index) => (
                    <div key={index} className='border p-4 rounded-xl flex flex-col justify-evenly items-center'>
                        <h1 className=' text-2xl font-bold '>{item.desc}</h1>
                        <p> {item.title}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Services