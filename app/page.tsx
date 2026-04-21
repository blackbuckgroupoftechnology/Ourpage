import React from 'react'
import UserBenifits from '@/components/landingComponents/UserBenifits';
import HardwareCom from '@/components/landingComponents/HardwareComp';
import Image from 'next/image'
import Services from '@/components/landingComponents/Services';
import InitialLanding from '@/components/landingComponents/InitialLanding';
import Nav from '@/components/landingComponents/Nav';
import Contact from '@/components/landingComponents/Contact';
import Footer from '@/components/landingComponents/Footer';
import BusinessSolutions from '@/components/landingComponents/Partner';
import TeamSection from '@/components/landingComponents/TeamSection';
import { Varela_Round } from 'next/font/google';

const varela = Varela_Round({
    subsets: ['latin'],
    weight: ['400'],
});
const page = () => {

    return (
        <div className={varela.className}>
            <Nav />
            <div className='px-[12%] flex flex-col gap-6'>

                <InitialLanding />

                <Services />
                <Image src="/landing.png" alt="Landing Image" width={1200} height={400} className='w-full py-4 h-auto rounded-lg' />
                <h1 className=" text-4xl text-center font-bold my-4">
                    A Comprehensive Vehicle IntelligenceEcosystem
                </h1>
                <p className='text-center text-2xl'>YatriTECH delivers universal coverage across all transportation types
                    empowering individuals, businesses, and governments with real-time
                    intelligence, safety, and control</p>
                <UserBenifits />
                <HardwareCom />
                <h1 className=" text-4xl text-center font-bold my-4">Enterprise-Grade Engineering</h1>
                <p className='text-center text-2xl'>Every component is carefully selected and integrated to ensure maximum
                    reliability, accuracy, and performance in all conditions. Built to last, designed to perform.</p>
                <TeamSection />
                <BusinessSolutions />
                <Contact />
                {/* <LoginComponent /> */}
            </div>
            <Footer />
        </div>
    )
}

export default page