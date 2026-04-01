import Image from "next/image";
import Navbar from "@/components/Navbar";
import GenTelematics from "@/components/GenTelematics";
import DriverScoreCard from "@/components/DriverScoreCard";
import ClaimOverview from "@/components/ClaimOverview";
import MonthlyData from "@/components/MonthlyData";

export default function Home() {
  return (
    <div className="w-full items-center font-sans ">
      <GenTelematics />
      {/* <DriverScoreCard /> */}
      <ClaimOverview />
      <MonthlyData />
    </div>
  );
}
