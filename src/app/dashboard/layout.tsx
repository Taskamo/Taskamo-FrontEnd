"use client";

import Navbar from "@/components/layouts/navbar";
import Sidebar from "@/components/layouts/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex p-6 min-h-screen h-full gap-6">
      <Sidebar />
      <section className="w-full flex flex-col gap-6">
        <Navbar />
        {children}
      </section>
    </main>
  );
};

export default DashboardLayout;
