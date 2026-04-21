import Image from "next/image";
import Navbar from "@/components/mainComponents/Navbar";
import GenTelematics from "@/components/mainComponents/GenTelematics";
import DriverScoreCard from "@/components/mainComponents/DriverScoreCard";
import ClaimOverview from "@/components/mainComponents/ClaimOverview";
import MonthlyData from "@/components/mainComponents/MonthlyData";
import ScoreAnalysis from "@/components/mainComponents/ScoreAnalysis";
import HardBraking from "@/components/mainComponents/HardBraking";

export default function Home() {
  return (
    <div className="w-full bg-[#DFE3ED]  items-center font-sans ">
      <GenTelematics />
      {/* <DriverScoreCard /> */}
      <div className=" mt-6 flex justify-between">
        <DriverScoreCard />
        <ClaimOverview />
      </div>
      <div className="mt-6 flex justify-between">
        <HardBraking />
        <MonthlyData />
      </div>
    </div>
  );
}
