import Image from "next/image";
import Navbar from "@/components/Navbar";
import GenTelematics from "@/components/GenTelematics";
import DriverScoreCard from "@/components/DriverScoreCard";
import ClaimOverview from "@/components/ClaimOverview";
import MonthlyData from "@/components/MonthlyData";
import ScoreAnalysis from "@/components/ScoreAnalysis";
import HardBraking from "@/components/HardBraking";

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
