import { ReactNode } from 'react';
import {
    MapPinIcon,
    ChartBarIcon,
    CpuChipIcon,
    UserGroupIcon,
    CheckBadgeIcon,
} from '@heroicons/react/24/outline';

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
);

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
        <div className="rounded-2xl p-10 bg-gray-100 mt-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Transform Your Fleet Operations
                </h2>
                <p className="text-lg text-gray-600">
                    Built for fleet owners, transport companies, and logistics businesses.
                    Scale from 10 to 10,000 vehicles with our enterprise-grade platform.
                </p>
            </div>
            <div className=" flex gap-4 container mx-auto">

                <div className=' flex w-1/2 flex-col gap-2 '>

                    {/* Features Grid */}
                    <div className="flex flex-col gap-3">
                        <FeatureCard
                            icon={<MapPinIcon className=" w-6 h-6" />}
                            title="Fleet Monitoring"
                            description="Track your entire fleet in real-time with centralized dashboard"
                        />
                        <FeatureCard
                            icon={<ChartBarIcon className="w-6 h-6" />}
                            title="Driver Analytics"
                            description="Comprehensive insights into driver behavior and performance metrics"
                        />
                        <FeatureCard
                            icon={<CpuChipIcon className="w-6 h-6" />}
                            title="Route Optimization"
                            description="AI-powered route planning to reduce fuel costs and delivery times"
                        />
                        <FeatureCard
                            icon={<UserGroupIcon className="w-6 h-6" />}
                            title="Team Management"
                            description="Assign vehicles, manage permissions, and monitor team efficiency"
                        />
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg cursor-pointer">
                            Schedule a Business Meeting
                        </button>
                    </div>
                </div>

                {/* Why Choose YatriTECH Section */}
                <div className="bg-white rounded-2xl shadow-lg w-1/2 p-8">
                    <div className="flex flex-col gap-4 ">
                        <div className=''>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
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
                        <div className=" bg-gray-50 rounded-xl p-8">
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