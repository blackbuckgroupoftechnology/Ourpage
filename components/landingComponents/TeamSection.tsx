// components/TeamSection.tsx
import { 
  IoEyeOutline, 
  IoCodeSlashOutline, 
  IoHardwareChipOutline,
  IoColorPaletteOutline,
  IoPhonePortraitOutline
} from 'react-icons/io5';
import { MdOutlineEngineering } from 'react-icons/md';
import { TbApi, TbMicrophone } from 'react-icons/tb';
import { GiCpu } from 'react-icons/gi';

interface TeamMemberProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor?: string;
  iconColor?: string;
}

const TeamMemberCard = ({ 
  icon, 
  title, 
  description, 
  iconBgColor = "bg-blue-50",
  iconColor = "text-blue-600"
}: TeamMemberProps) => (
  <div className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div className={`w-14 h-14 ${iconBgColor} rounded-xl flex items-center justify-center ${iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

export function TeamSection() {
  const teamMembers = [
    {
      icon: <IoEyeOutline className="w-7 h-7" />,
      title: "CEO / Vision Lead",
      description: "Strategic direction and product vision",
      iconBgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: <MdOutlineEngineering className="w-7 h-7" />,
      title: "CTO / Tech Architecture",
      description: "Technical strategy and system design",
      iconBgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      icon: <GiCpu className="w-7 h-7" />,
      title: "Hardware Team",
      description: "Circuit design and component integration",
      iconBgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: <IoPhonePortraitOutline className="w-7 h-7" />,
      title: "Firmware Team",
      description: "Embedded systems and device programming",
      iconBgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: <IoCodeSlashOutline className="w-7 h-7" />,
      title: "Software Team",
      description: "Platform development and API services",
      iconBgColor: "bg-cyan-50",
      iconColor: "text-cyan-600"
    },
    {
      icon: <IoColorPaletteOutline className="w-7 h-7" />,
      title: "Design Team",
      description: "User experience and interface design",
      iconBgColor: "bg-pink-50",
      iconColor: "text-pink-600"
    }
  ];

  return (
    <section className="bg-gray-100 rounded-3xl p-5">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-18 bg-blue-200"></div>
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider mx-3">
              Our Team
            </span>
            <div className="h-px w-18 bg-blue-200"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet the Minds Behind YatriTECH
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            A multidisciplinary team of experts working together to build the future of vehicle intelligence
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              icon={member.icon}
              title={member.title}
              description={member.description}
              iconBgColor={member.iconBgColor}
              iconColor={member.iconColor}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-400 opacity-60"></div>
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <div className="w-2 h-2 rounded-full bg-blue-600 opacity-60"></div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;