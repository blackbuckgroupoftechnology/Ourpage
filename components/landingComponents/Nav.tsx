import React from 'react'
import Image from 'next/image'

const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* Logo Section */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    <Image 
                        src="/yetri-logo.png" 
                        alt="YatriTECH Logo" 
                        width={50} 
                        height={50} 
                        className="group-hover:scale-105 transition-transform duration-200"
                    />
                    <div>
                        <h1 className="text-blue-700 text-2xl font-bold leading-none">
                            YatriTECH
                        </h1>
                        <p className="text-gray-500 text-xs">
                            Developed by BlackBuck
                        </p>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                    {['About', 'Product', 'Team', 'Partners', 'Contact Us'].map((item, index) => (
                        <p 
                            key={index} 
                            className="cursor-pointer relative group"
                        >
                            {item}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </p>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                    
                    {/* Secondary Button */}
                    <button className="hidden sm:block px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                        Login
                    </button>

                    {/* Primary Button */}
                    <button className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 hover:shadow-md transition">
                        Order Now
                    </button>

                </div>

            </div>
        </nav>
    )
}

export default Nav