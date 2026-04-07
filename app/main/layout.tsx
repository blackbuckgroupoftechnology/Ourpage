import Navbar from "@/components/mainComponents/Navbar";
import SideNav from "@/components/mainComponents/SideNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="hidden md:block">
        <SideNav />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">

        {/* Navbar */}
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-4">
          <Navbar />
        </div>

        {/* Page Content */}
        <main className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-4">
          {children}
        </main>

      </div>
    </div>
  );
}