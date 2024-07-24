import { Separator } from "@/components/ui/separator"
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <>
    <header className="text-black body-font w-full fixed z-50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-black">Tailblocks</span>
          </Link>
          <nav className="md:ml-16 md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-12 px-4 py-1 hover:bg-gray-200 hover:rounded-s-full hover:rounded-e-full" href="/">Pricing</Link>
            <Link className="mr-12 px-4 py-1 hover:bg-gray-200 hover:rounded-s-full hover:rounded-e-full" href="/">Docs</Link>
            <Link className="mr-12 px-4 py-1 hover:bg-gray-200 hover:rounded-s-full hover:rounded-e-full" href="/">FAQs</Link>
          </nav>
          <button className="inline-flex items-center bg-white border-gray-400 border-2 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-s-full rounded-e-full text-black mt-4 mx-2 md:mt-0">Log In
          </button>
          <button className=" ml-2 inline-flex items-center bg-black py-1 px-3 hover:border-2 hover:border-gray-400 rounded-lg text-white mt-4 mx-2 md:mt-0">Sign Up
          </button>
        </div>
      </header>
      <Separator />
      </>
  )
}
