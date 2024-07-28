import CodeSnippet from '@/components/codeSnippet'
import React from 'react'
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from 'next/link'
import { getTestimonials } from '@/lib/actions/get-testimonials';
import Image from 'next/image';
import { Testimonial } from '@/app/models/User';


async function fetchTestimonials() {
  const username = 'one'; // You can make this dynamic if needed
  const result = await getTestimonials(username);
  if (!result.success) {
    return []; // Handle errors or empty data gracefully
  }
  return result.data?.testimonials || [];
}

export const revalidate = 60;

export default async function Documentation() {
  const testimonials: Testimonial[] = await fetchTestimonials();    

  return (
    <div className='bg-[#FAFAFA] mt-16'>
      <h2 className = "pt-16 pb-8 pl-12 text-2xl lg:text-4xl font-bold">Documentation</h2>
      <div className='pl-20 w-4/5'>
      <div className='text-black py-4'>
        <h2 className='text-2xl font-bold mb-4'>Collect Testimonials</h2>
        <p className='text-wrap break-words mb-2'>We will collect your costumer&apos;s testimonials on your behalf. You just need to add a button/text with link to a specific page where your costumers can write testimonial for you.</p>
        <p className='text-wrap break-words mb-4'>This link is provided in your User Details section.</p>
        <p className='text-wrap break-words'>Below is an example of a button clicking which sends the costumers of user with username &apos;one&apos; to the page where they can write testimonial for him</p>
      </div>
    <Tabs defaultValue="account" className="max-w-[900px] my-8 ">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Code</TabsTrigger>
        <TabsTrigger value="password">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card className='bg-[#2A323C]'>
          <CardHeader>
            <CardTitle className='text-white'>JSX</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
          <CodeSnippet language='jsx' code= {
            `<a href='http://localhost:3000/write-testimonial?username=one' >  // enter your username here
              <button className = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-red-600 h-10 px-4 py-2"> 
                Write Testimonial 
              </button>
            </a>`}  />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card className = 'bg-[#2A323C]' >
          <CardHeader>
            {/* <CardTitle>Preview</CardTitle> */}
            <CardDescription className = 'text-white text-center'>
              Click on the Write Testimonial button to write testimonial for username &apos;one&apos;
            </CardDescription>
          </CardHeader>
          <CardFooter className='justify-center'>
            <Link href="http://localhost:3000/write-testimonial?username=one" target='_blank'><button className = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-red-600 h-10 px-4 py-2"> 
                Write Testimonial 
              </button></Link> 
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
    <Separator />
    <div className='ml-20 w-4/5 pb-8 pt-4'>
      <div className='text-black my-8'>
        <h2 className='text-2xl font-bold mb-4'>Display Testimonials</h2>
        <p className='text-wrap break-words mb-2'>We have provided an API endpoint (present in User Details section) hitting which returns json data of testimonials written by your costumers along with their name and photo.</p>
        <p className='text-wrap break-words mb-2'>Below is the sample JSX code which displays user &apos;one&apos;s&apos; testimonials. It is designed with tailwind. You can directly use it by adding your API endpoint in the below code or give a custom design as per your liking.</p>
      </div>
    <Tabs defaultValue="account" className="max-w-[900px] my-8 ">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Code</TabsTrigger>
        <TabsTrigger value="password">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="account"> 
      <Card className='bg-[#2A323C] border-b-0 rounded-b-none'>
          <CardHeader className='space-y-0 pb-0'>
            <CardTitle className='text-white text-md font-medium'>Add scroll animation in taiwind.config.js</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
          <CodeSnippet language='jsx' code= {`
const config = {
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite"
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
}`}  />
          </CardContent>
        </Card>
        <Card className='bg-[#2A323C] border-y-0 rounded-none'>
          <CardHeader className='space-y-0 pb-0'>
            <CardTitle className='text-white text-md font-medium'>Add pause utility in globals.css</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
          <CodeSnippet language='jsx' code= {`
@layer utilities {
  .paused {
    animation-play-state: paused;
  }
}`}  />
          </CardContent>
        </Card>
        <Card className='bg-[#2A323C] border-y-0 rounded-none'>
          <CardHeader className='space-y-0 pb-0'>
            <CardTitle className='text-white text-md font-medium'>Add image configuration in next.config.js</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
          <CodeSnippet language='jsx' code= {`
const nextConfig = {
    images: {
      domains: ['utfs.io'], // Add the hostname of your image provider (utfs.io in this case)
    },
};
  `}  />
          </CardContent>
        </Card>
        <Card className='bg-[#2A323C] border-t-0 rounded-t-none'>
          <CardHeader className='space-y-0 pb-0'>
            <CardTitle className='text-white text-md font-medium'>Add Testimonials section in your Homepage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
          <CodeSnippet language='jsx' code= {`
          'use client'

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Testimonial{
  _id: string | object;
  name: string;
  message: string;
  image: string; 
  createdAt: Date
}

export default function Home() {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(()=>{
    const getTestimonials = async() => {
      const response = await axios.get('http://localhost:3000/api/testimonials?username=one');
      setTestimonials(response.data.data);
    }
    getTestimonials();
  }, [])
  return (
      <section className="w-11/12 mx-auto p-6">
          <p className='text-4xl font-bold text-white text-center my-6'>Testimonials</p>
          <div className="flex overflow-hidden space-x-16 h-auto group">
        <div className="flex space-x-16 animate-loop-scroll bg-[#1D232A] py-2 group-hover:paused">
          {testimonials && testimonials.map((testimonial: Testimonial)=> (
            <div key ={String(testimonial._id)} className= "rounded-lg shadow-md p-4 bg-[#2A323C] min-w-[400px]">
            <div className="text-center">   
              <Image 
                src={testimonial.image}
                alt="testimonial" 
                width={96} 
                height={96}
                className="w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-white"  
              />
              <h2 className="text-white font-medium title-font tracking-wider text-md">{testimonial.name}</h2>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-2 mb-4"></span>
              <p className="leading-relaxed text-white">{testimonial.message}</p>
            </div>
          </div>
          ))}
        </div>
        <div className="flex space-x-16 animate-loop-scroll bg-[#1D232A] py-2 aria-hidden:true group-hover:paused">
          {testimonials && testimonials.map((testimonial: Testimonial)=> (
            <div key ={String(testimonial._id)} className= "rounded-lg shadow-md p-4 bg-[#2A323C] min-w-[400px]">
            <div className="text-center">   
              <Image 
                src={testimonial.image}
                alt="testimonial" 
                width={96} 
                height={96}
                className="w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-white"  
              />
              <h2 className="text-white font-medium title-font tracking-wider text-md">{testimonial.name}</h2>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-2 mb-4"></span>
              <p className="leading-relaxed text-white">{testimonial.message}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
        </section>
  )
`}  />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <CardContent>
          <p className='text-4xl font-bold text-black text-center my-6'>Testimonials</p>
          <div className="flex overflow-hidden space-x-16 h-auto group">
        <div className="flex space-x-16 animate-loop-scroll bg-[#1D232A] py-2 group-hover:paused">
          {testimonials && testimonials.map((testimonial: Testimonial)=> (
            <div key ={String(testimonial._id)} className= "rounded-lg shadow-md p-4 bg-[#2A323C] min-w-[400px]">
            <div className="text-center">   
              <Image 
                src={testimonial.image}
                alt="testimonial" 
                width={96} 
                height={96}
                className="w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-white"  
              />
              <h2 className="text-white font-medium title-font tracking-wider text-md">{testimonial.name}</h2>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-2 mb-4"></span>
              <p className="leading-relaxed text-white">{testimonial.message}</p>
            </div>
          </div>
          ))}
        </div>
        <div className="flex space-x-16 animate-loop-scroll bg-[#1D232A] py-2 aria-hidden:true group-hover:paused">
          {testimonials && testimonials.map((testimonial: Testimonial)=> (
            <div key ={String(testimonial._id)} className= "rounded-lg shadow-md p-4 bg-[#2A323C] min-w-[400px]">
            <div className="text-center">   
              <Image 
                src={testimonial.image}
                alt="testimonial" 
                width={96} 
                height={96}
                className="w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-white"  
              />
              <h2 className="text-white font-medium title-font tracking-wider text-md">{testimonial.name}</h2>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-2 mb-4"></span>
              <p className="leading-relaxed text-white">{testimonial.message}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
        </CardContent>
      </TabsContent>
    </Tabs>
    </div>
    </div>
  )
}
