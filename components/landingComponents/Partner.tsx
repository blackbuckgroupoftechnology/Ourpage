import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";

const features = [
    { img: FaMapMarkerAlt, title: "Fleet Monitoring", desc: "Track your entire fleet in real-time with centralized dashboard" },
    { img: FaRegChartBar, title: "Driver Analytics", desc: "Comprehensive insights into driver behavior and performance metrics" },
    { img: FaMicrochip, title: "Route Optimization", desc: "AI-powered route planning to reduce fuel costs and delivery times" },
    { img: RiTeamFill, title: "Team Management", desc: "Assign vehicles, manage permissions, and monitor team efficiency" }
];

import { CheckBadgeIcon } from '@heroicons/react/24/outline';

interface WhyChooseItemProps {
    text: string;
}

const WhyChooseItem = ({ text }: WhyChooseItemProps) => (
    <li className="flex items-start gap-3">
        <CheckBadgeIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
        <span className="text-gray-700">{text}</span>
    </li>
);

interface MetricCardProps {
    value: string;
    label: string;
}

const MetricCard = ({ value, label }: MetricCardProps) => (
    <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
    </div>
);

export function BusinessSolutions() {
    return (
        <div className="rounded-3xl px-6 md:px-12 py-16 bg-gradient-to-b from-gray-50 to-gray-100 mt-16">
            
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Transform Your Fleet Operations
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Built for fleet owners, transport companies, and logistics businesses.
                    Scale from 10 to 10,000 vehicles with our enterprise-grade platform.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 container mx-auto">

                {/* LEFT SIDE */}
                <div className="flex w-full lg:w-1/2 flex-col gap-5">

                    {features.map((item, index) => {
                        const Icon = item.img;
                        return (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    
                                    {/* Icon */}
                                    <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                                        <Icon className="h-6 w-6 text-blue-700 group-hover:text-white transition-colors duration-300" />
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* CTA */}
                    <div className="text-center mt-6">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all shadow-md hover:shadow-xl hover:scale-105 duration-300">
                            Schedule a Business Meeting
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="bg-white rounded-3xl shadow-xl w-full lg:w-1/2 p-8 md:p-10">
                    <div className="flex flex-col gap-6">

                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Why Choose YatriTECH for Business?
                            </h3>

                            <ul className="space-y-4">
                                <WhyChooseItem text="Reduce operational costs by up to 30%" />
                                <WhyChooseItem text="Improve delivery efficiency by 25%" />
                                <WhyChooseItem text="24/7 support for enterprise clients" />
                                <WhyChooseItem text="Custom API integration available" />
                                <WhyChooseItem text="Dedicated account manager" />
                                <WhyChooseItem text="Scalable infrastructure" />
                            </ul>
                        </div>

                        {/* Metrics */}
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mt-4">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                <MetricCard value="500+" label="Businesses" />
                                <MetricCard value="50K+" label="Vehicles" />
                                <MetricCard value="99.9%" label="Uptime" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessSolutions;