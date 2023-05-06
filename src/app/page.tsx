"use client";

// import HeroSectionAnimation from "@/assets/motion/70032-task-on-clipboard-2.json";
import HeroSectionAnimation from "@/assets/motion/73173-manager.json";
import { Button } from "antd";
import Lottie from "react-lottie";
import { Android } from "@/assets/icons";
import Link from "next/link";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: HeroSectionAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-[#e6e6e6] text-slate-950 min-h-screen">
      <section className="flex items-center justify-center">
        <div className="max-h-[700px] max-w-[700px] h-full w-full">
          <Lottie options={defaultOptions} />
        </div>
      </section>
      <section className="p-4 flex flex-col gap-8 justify-center">
        <h1 className="max-w-[560px] text-4xl font-extrabold font-sans text-slate-800 text-gradient">
          Stay on top of your day with our all-in-one scheduling app!
        </h1>
        <p className="max-w-[560px] text-gray-600 text-lg">
          Stay on top of your day, no matter where you are, with our all-in-one
          scheduling app and website. Whether you're on the go or at your desk,
          you can easily manage your calendar, to-do list, and timeline with our
          user-friendly tools. Plus, with seamless syncing across devices,
          you'll never miss a beat.
        </p>
        <div className="flex flex-row gap-4">
          <Link href="/login">
            <Button type="primary" size="large">
              Login / Register
            </Button>
          </Link>
          <Button
            className="inline-flex"
            size="large"
            onClick={() => (window.location.href = "/taskamo.apk")}
            icon={<Android className="inline-block stroke-primaryA500 mr-2" />}
          >
            Download App
          </Button>
        </div>
      </section>
    </main>
  );
}
