"use client"
//Pagination karna hai
import UserModel, { Testimonial } from '@/app/models/User';
import { getTestimonials } from '@/lib/actions/get-testimonials';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'

export default function SelectedTestimonials({ params }: { params: { userId: string } }) {

  const { userId } = params;
  const router = useRouter();
  const [cookieUserId, setCookieUserId] = useState<string>('');
  const [username, setUsername] = useState('');
  const [testimonials, setTestimonials] = useState([]);

  //authorize
  useEffect(()=> {
    const authorizeUser = async() => {
      try {
        const response = await axios.post('/api/auth/me');
        console.log("User Authorized", response.data.data);
        setUsername(response.data.data.username);
        setCookieUserId(response.data.data._id.toString()); 
      } catch (err: any) {
        console.log(err);
      }
    }
    authorizeUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  console.log("username", username);

  const fetchTestimonials = async(userName: string) => {
    try {
      const result = await getTestimonials(userName);
      if(result.data){ 
        console.log(result.data?.testimonials);
        setTestimonials(result.data?.testimonials);
      }
      if (!result.success) {
          // Handle error (e.g., display error message)
          return;
      }
    } catch (error) {
      // Handle unexpected errors
      return;
    }
  }

  useEffect(()=> {
    if(username){
      fetchTestimonials(username);
    }
  }, [username])

  return (
    <section className="text-white body-font">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {testimonials && testimonials.map((testimonial: Testimonial)=> (
            <div key ={String(testimonial._id)} className= "rounded-lg shadow-md p-4 bg-[#2A323C]">
              <div className="relative">
                <button type="button" className="absolute top-0 right-1 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </button>
              </div>
            <div className="h-full text-center">   
              <Image 
                src={testimonial.image}
                alt="testimonial" 
                width={96} 
                height={96}
                className="w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-white"  
              />
              <h2 className="text-white font-medium title-font tracking-wider text-md">{testimonial.name}</h2>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-2 mb-4"></span>
              <p className="leading-relaxed">{testimonial.message}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}
