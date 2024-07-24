import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"
import { Spotlight } from "@/components/ui/Spotlight";
import Documentation from "@/components/Documentation";


export default function Home() {

  return (
    <div className="min-h-screen mx-auto bg-[#FAFAFA] flex flex-col">
      <header className="text-black body-font w-full h-20 fixed top-0 z-50 bg-[#FAFAFA] shadow-md">
        <div className="mx-auto flex md:p-5 flex-row justify-between items-center">
          <Link href="/" className="flex title-font font-medium ml-3 mt-3 justify-start items-center text-white md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl lg:text-2xl font-bold text-black">Testimonials</span>
          </Link>
          <div className="hidden md:flex md:items-center">
            <nav className="flex items-center text-base justify-center">
              <Link className="mr-12 px-4 py-1 hover:bg-gray-200 hover:rounded-s-full hover:rounded-e-full" href="#pricing">Pricing</Link>
              <Link className="mr-12 px-4 py-1 hover:bg-gray-200 hover:rounded-s-full hover:rounded-e-full" href="#docs">Docs</Link>
              <Link className="mr-12 px-4 py-1 hover:bg-gray-200 hover:rounded-s-full hover:rounded-e-full" href="#faqs">FAQs</Link>
            </nav>
          </div>
          <div className="flex justify-end mr-3 mt-3">
            <Link href="/signin"><button className="hidden lg:inline-flex lg:items-center bg-white border-gray-400 border-2 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-s-full rounded-e-full text-black md:mx-2 md:mt-0">Log In</button></Link>
            <Link href="/signup"><button className="md:ml-2 justify-self-end items-center bg-black py-1 px-3 hover:border-2 hover:border-gray-400 rounded-lg text-white md:mx-2 md:mt-0 md:inline-flex">Sign Up</button></Link>
          </div>
        </div>
      </header>
      <Separator/>
      <main className="w-full h-4/5">
        <div className="h-screen max-h-fit w-full rounded-md flex md:items-center md:justify-center bg-[#FAFAFA] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
       <div className="h-full w-4/5 min-w-fit dark:bg-[#FAFAFA] bg-[#FAFAFA]  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">

      <div className="absolute pointer-events-none inset-0 flex flex-col items-center justify-center dark:bg-[#FAFAFA] bg-[#FAFAFA] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col justify-center items-center">
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-2 sm:mx-6 lg:w-3/4 lg:mx-auto text-center font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-black to-black py-2 md:py-4 lg:py-6">
      Turn Feedback into Fuel.
      </p>
      <p className = "text-xl sm:text-2xl font-semibold text-gray-800 pb-6 w-11/12 mx-auto text-wrap text-center"> Effortlessly collect, manage, and display stunning testimonials to boost your brand.</p>
      <Link href='/signup'><button className="inline-flex items-center bg-blue-700 mt-3 md:mt-4 lg:mt-6 border-blue-800 text-md hover:shadow-lg border-2 py-1 px-5 focus:outline-none rounded-md text-white">Start Free Trial</button></Link>
      </div>
    </div>
    </div>
    <Separator />
      </main>
      <section id="pricing">
      <div className="text-center mt-24 font-semibold">
                <h1 className="text-2x md:text-3xl lg:text-5xl">
                    <span className="text-blue-700 tracking-wide">Flexible </span>
                    <span>Plans</span>
                </h1>
                <p className="pt-3 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
                    Choose a plan that works best for you.
                </p>
            </div>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-semibold text-gray-900">
                Free
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-gray-700">Free plan to try out the app</p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> ₹ 0 </strong>

                <span className="text-sm font-medium text-gray-700">/website</span>
              </p>

              <a
                className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                href="#"
              >
                Get Started
              </a>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-gray-900 sm:text-xl">Whats included:</p>

              <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>

                  <span className="text-gray-700"> Upto 10 testimonials </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>

                  <span className="text-gray-700"> Secure cloud storage </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>

                  <span className="text-gray-700"> Email support </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>

                  <span className="text-gray-700"> Help center access </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>

                  <span className="text-gray-700"> Phone support </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>

                  <span className="text-gray-700"> Community access </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-semibold text-gray-900">
                Basic
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-gray-700">Basic plan for individuals</p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">  ₹ 999 </strong>

                <span className="text-sm font-medium text-gray-700">/website</span>
              </p>

              <a
                className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                href="#"
              >
                Get Started
              </a>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-gray-900 sm:text-xl">Whats included:</p>

              <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>

                  <span className="text-gray-700"> Upto 100 testimonials</span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>

                  <span className="text-gray-700"> Email support </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>

                  <span className="text-gray-700"> Help center access </span>
                </li>

                <li className="flex items-center gap-1">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-700"> Phone support </span>
                </li>

                <li className="flex items-center gap-1">
                  
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-700"> Multiple Websites </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-700"> Community access </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-semibold text-gray-900">
                Enterprise
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-gray-700">Enterprise plan for businesses</p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> ₹ 3999 </strong>

                <span className="text-sm font-medium text-gray-700">/enterprise</span>
              </p>

              <a
                className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                href="#"
              >
                Get Started
              </a>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-gray-900 sm:text-xl">Whats included:</p>

              <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>

                  <span className="text-gray-700"> Unlimited tesimonials</span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>

                  <span className="text-gray-700"> Email support </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>

                  <span className="text-gray-700"> Help center access </span>
                </li>

                <li className="flex items-center gap-1">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-700"> Phone support </span>
                </li>

                <li className="flex items-center gap-1">
                  
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-700"> Upto 5 Websites </span>
                </li>

                <li className="flex items-center gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-700"> Community access </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </section>
      <Separator />
      <section id="docs">
        <Documentation />
      </section>
      <Separator />
      <section className="mb-48" id="faqs">
        <div>
        <h2 className = "pt-24 pb-8 pl-12 text-2xl lg:text-4xl font-bold">FAQs</h2>
        </div>
      <div className="space-y-4 mx-4 md:mx-6 lg:w-2/3 lg:ml-10 justify-center">
        <details
          className="group border-s-4 border-blue-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
            recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
            consequuntur distinctio corporis earum similique!
          </p>
        </details>

        <details
          className="group border-s-4 border-blue-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
            recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
            consequuntur distinctio corporis earum similique!
          </p>
        </details>
      </div>
      </section>
    </div> 
  );
}
