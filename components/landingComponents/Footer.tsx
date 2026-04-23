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
const legal = ['Privacy Policy', 'Terms of Services', 'Cookie Policy'];

export function Footer() {
    return (
        <footer className="bg-zinc-900 text-gray-400">
            <div className="max-w-7xl mx-auto px-6 py-14">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

                    {/* Logo + Description */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3">
                            <Image src="/yetri-logo.png" alt="Logo" width={50} height={50} />
                            <div>
                                <h2 className="text-white text-xl font-bold">YatriTECH</h2>
                                <p className="text-sm text-gray-500">by BlackBuck</p>
                            </div>
                        </div>

                        <p className="mt-4 text-sm text-gray-400 max-w-md leading-relaxed">
                            Next-generation vehicle intelligence for smarter, safer, and more connected journeys.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-6">
                            {social.map((item, index) => {
                                const Icon = item.img;
                                return (
                                    <div 
                                        key={index} 
                                        className="p-2 rounded-lg bg-zinc-800 hover:bg-blue-600 transition cursor-pointer"
                                    >
                                        <Icon className="w-4 h-4 text-gray-300 hover:text-white" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="text-white text-sm font-semibold mb-4">Product</h3>
                        <ul className="space-y-3">
                            {product.map((item, index) => (
                                <Link 
                                    key={index} 
                                    href="#" 
                                    className="block text-sm hover:text-white transition"
                                >
                                    {item}
                                </Link>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-sm font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {company.map((item, index) => (
                                <Link 
                                    key={index} 
                                    href="#" 
                                    className="block text-sm hover:text-white transition"
                                >
                                    {item}
                                </Link>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-sm font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {legal.map((item, index) => (
                                <Link 
                                    key={index} 
                                    href="#" 
                                    className="block text-sm hover:text-white transition"
                                >
                                    {item}
                                </Link>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 text-center md:text-left">
                        © {new Date().getFullYear()} YatriTECH by BlackBuck. All rights reserved.
                    </p>

                    <p className="text-xs text-gray-600">
                        Built for smarter transportation 🚍
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;