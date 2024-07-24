import React from 'react'
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Hero() {
  return (
    <main className="h-4/5 w-full">
        <div className="h-full w-full rounded-md flex md:items-center md:justify-center bg-[#FAFAFA] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
       <div className="h-full w-full dark:bg-[#FAFAFA] bg-[#FAFAFA]  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">

      <div className="absolute pointer-events-none inset-0 flex flex-col items-center justify-center dark:bg-[#FAFAFA] bg-[#FAFAFA] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col justify-center items-center">
      <p className="text-4xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-black to-black py-6">
      Turn Feedback into Fuel.
      </p>
      <p className = "text-2xl font-semibold text-gray-800 pb-6"> Effortlessly collect, manage, and display stunning testimonials to boost your brand.</p>
      <Link href='/signup'><button className="inline-flex items-center bg-blue-700 mt-12 border-blue-800 hover:shadow-lg border-2 py-1 px-5 focus:outline-none rounded-md text-white">Start Free Trial</button></Link>
      </div>
    </div>
    </div>
      </main>
  )
}
