'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const LoginComponent: React.FC = () => {

    return (
        <div className=" flex items-center justify-center ">
            <div className="shadow-xl p-5 rounded-xl max-w-md bg-gray-100 w-full space-y-8">
                <div className='flex justify-evenly'>
                    <h2 className="mt-6 text-center text-3xl font-semibold text-gray-700 bg-blue-700 text-white rounded-lg p-3 cursor-pointer">
                        Login
                    </h2>
                    <h2 className="mt-6 text-center text-3xl font-semibold text-gray-700 border rounded-lg p-3 cursor-pointer">
                        Signup
                    </h2>
                </div>

                {/* <form className="mt-8 space-y-6" onSubmit={handleSubmit}> */}
                <div className=" rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="email" className="">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none  relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Email Address"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="........."
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="rememberMe"
                            name="rememberMe"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <Link href="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                        </Link>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Login
                    </button>
                </div>
                {/* </form> */}
            </div>
        </div>
    );
};

export default LoginComponent;