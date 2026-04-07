import UserBenifits from '@/components/landingComponents/UserBenifits';
import HardwareCom from '@/components/landingComponents/HardwareComp';
import React from 'react'
import Image from 'next/image'
import Services from '@/components/landingComponents/Services';
import InitialLanding from '@/components/landingComponents/InitialLanding';

const page = () => {
    return (
        <div>
            <InitialLanding />
            
            <Services />
            <Image src="/landing.png" alt="Landing Image" width={1200} height={400} className='w-full h-auto rounded-lg' />
            <h1 className=" text-3xl font-bold">
                A Comprehensive Vehicle IntelligenceEcosystem
            </h1>
            <p>YatriTECH delivers universal coverage across all transportation types
                empowering individuals, businesses, and governments with real-time
                intelligence, safety, and control</p>
            <UserBenifits />
            <HardwareCom />
            <h1 className=" text-2xl font-bold">Enterprise-Grade Engineering</h1>
            <p>Every component is carefully selected and integrated to ensure maximum
                reliability, accuracy, and performance in all conditions. Built to last, designed to perform.</p>
        </div>
    )
}

export default page