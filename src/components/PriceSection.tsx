import React from 'react'

export default function PriceSection() {
  return ( 
    <section className='py-10 px-8 bg-[#FAFAFA] max-h-screen'>
      <div className="min-h-screen flex justify-center items-center">
        <div className="">
            <div className="text-center font-semibold">
                <h1 className="text-5xl">
                    <span className="text-blue-700 tracking-wide">Flexible </span>
                    <span>Plans</span>
                </h1>
                <p className="pt-3 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
                    Choose a plan that works best for you.
                </p>
            </div>
            <div className="pt-16 flex flex-row">
                <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
                    <h1 className="text-black font-semibold text-2xl">Free</h1>
                    <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">$ </span>
                        <span className="text-3xl font-semibold">0</span>
                        <span className="text-gray-400 font-medium">/ website</span>
                    </p>
                    <hr className="mt-4 border-1" />
                    <div className="pt-8">
                        <p className="font-semibold text-gray-400 text-left flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            <span className="pl-2">
                                Limited to <span className="text-black">20</span> Testimonials
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            <span className="pl-2">
                                 <span className="text-black">Secure</span> cloud storage
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            <span className="pl-2">
                                Easy Website<span className="text-black"> Integration</span>
                            </span>
                        </p>

                        <a href="#" className="">
                            <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                <span className="font-medium">
                                    Choose Plan
                                </span>
                            </p>
                        </a>
                    </div>
                </div>
                <div className="w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">
                    <h1 className="text-white font-semibold text-2xl">Enterprise</h1>
                    <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">$ </span>
                        <span className="text-3xl font-semibold">30</span>
                        <span className="text-gray-400 font-medium">/ enterprise</span>
                    </p>
                    <hr className="mt-4 border-1 border-gray-600" />
                    <div className="pt-8">
                        <p className="font-semibold text-gray-400 text-left flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            <span className="pl-2">
                            <span className="text-white">Unlimited</span> Tesimonials
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            <span className="pl-2">
                                Upto <span className="text-white">3 Websites</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            <span className="pl-2">
                                All Features in <span className="text-white">Basic Plan </span>
                            </span>
                        </p>

                        <a href="#" className="">
                            <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                <span className="font-medium">
                                    Choose Plan
                                </span>
                            </p>
                        </a>
                    </div>
                    <div className="absolute top-4 right-4">
                        <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">Popular</p>
                    </div>
                </div>
                <div className="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">
                    <h1 className="text-black font-semibold text-2xl">Basic</h1>
                    <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">$ </span>
                        <span className="text-3xl font-semibold">10</span>
                        <span className="text-gray-400 font-medium">/ website</span>
                    </p>
                    <hr className="mt-4 border-1" />
                    <div className="pt-8">
                        <p className="font-semibold text-gray-400 text-left flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            <span className="pl-2">
                                Upto <span className="text-black">50</span> Testimonials
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            <span className="pl-2">
                            Basic <span className="text-black">Analytics Dashboard</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            <span className="pl-2">
                            24/7 Phone <span className="text-black"> Support</span>
                            </span>
                        </p>

                        <a href="#" className="">
                            <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                <span className="font-medium">
                                    Choose Plan
                                </span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}
