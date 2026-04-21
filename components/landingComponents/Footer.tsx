import Link from 'next/link';
import Image from 'next/image';

import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const social = [
    { img: SlSocialFacebook },
    { img: FaInstagram },
    { img: SlSocialLinkedin },
    { img: MdOutlineMail },
    { img: FaXTwitter },
];
const product = ['Features', 'Technology', 'Pricing', 'Documentation'];
const company = ['Team', 'Business Solution', 'Careers', 'Contact'];
const legal = ['Privcy Policy', 'Terms of Sercices', 'Cookie Policy'];


export function Footer() {
    return (
        <footer className="bg-zinc-800 border-t border-gray-200">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="flex justify-between">
                    {/* Logo Section */}
                    <div className="mb-10">
                        <div className="flex flex-col">
                            <div className="flex">
                                <Image src="/yetri-logo.png" alt="Landing Image" width={60} height={60} />
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold tracking-tight text-gray-100">
                                        Yatri TECH
                                    </span>
                                    <span className="text-sm text-gray-500 mt-1">
                                        by BlackBuck
                                    </span>
                                </div>

                            </div>

                            <p className="text-gray-600 max-w-md mt-4 text-sm">
                                Next-generation vehicle intelligence for smarter, safer journeys.
                            </p>
                        </div>
                    </div>
                    {/* Product Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">
                            Products
                        </h3>
                        <ul className="mt-4 flex flex-col space-y-3">
                            {
                                product.map((item, index) => {
                                    return (
                                        <Link key={index} href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                                            {item}
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">
                            Company
                        </h3>
                        <ul className="mt-4 flex flex-col space-y-3">
                            {
                                company.map((item, index) => {
                                    return (
                                        <Link key={index} href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                                            {item}
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">
                            Legal
                        </h3>
                        <ul className="mt-4 flex flex-col space-y-3">
                            {
                                legal.map((item, index) => {
                                    return (
                                        <Link key={index} href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                                            {item}
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500 text-center">
                        &copy; {new Date().getFullYear()} YatriTECH by BlackBuck. All rights reserved.
                    </p>
                    <div className='flex gap-7'>
                        {
                            social.map((item, index) => {
                                const Icon = item.img;
                                return (
                                    <div key={index} className='bg-zinc-900 p-2 rounded-lg cursor-pointer'>
                                        <Icon className='text-zinc-300 h-5 w-5' />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;