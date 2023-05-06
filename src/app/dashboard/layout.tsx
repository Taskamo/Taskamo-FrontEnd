"use client";

import Navbar from "@/components/layouts/navbar";
import Sidebar from "@/components/layouts/sidebar";
import { Button } from "antd";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="hidden lg:flex p-6 min-h-screen h-full gap-6">
        <Sidebar />
        <section className="w-full flex flex-col gap-6">
          <Navbar />
          {children}
        </section>
      </main>
      <main className="flex flex-col items-center justify-center lg:hidden p-6 min-h-screen h-full gap-6">
        <h1 className="text-xl font-bold text-center">
          Get our app to enjoy all of its features! Download now and start using
          it on your mobile device.
        </h1>
        <Button
          type="primary"
          onClick={() => (window.location.href = "/taskamo.apk")}
        >
          Download Now
        </Button>
      </main>
    </>
  );
};

export default DashboardLayout;
