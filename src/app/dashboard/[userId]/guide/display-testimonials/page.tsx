"use client"

import CodeSnippet from "@/components/codeSnippet"
import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"
import { getTestimonials } from "@/lib/actions/get-testimonials"
import { Testimonial } from "@/app/models/User"
import Image from "next/image"
import axios from "axios"

export default function DisplayTestimonialsGuidePage() {
  const [username, setUsername] = useState("one")
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.post("/api/auth/me")
        if (response.data) {
          setUsername(response.data.data.username)
        }
      } catch (error: any) {
        return Response.json({
          error: error.message,
        })
      }
    }
    fetchUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const result = await getTestimonials(username)

        if (result.success && result.data) {
          setTestimonials(result.data.testimonials || [])
        } else {
          console.error("Failed to fetch testimonials")
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error)
      }
    }

    fetchTestimonials()
  }, [username])

  return (
    <div className="bg-[#1D232A] ml-20 my-6 w-4/5">
      <Breadcrumb>
        <BreadcrumbList className="text-gray-300">
          <BreadcrumbItem>
            <BreadcrumbLink className="hover:text-green-400">
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="hover:text-green-400">
              Guide
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-white ">
            <BreadcrumbLink className="hover:text-green-400">
              Collect Testimonials
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="text-white my-8">
        <h2 className="text-3xl font-bold mb-8">Display Testimonials</h2>
        <div className="text-2xl fond-bold mb-2 ">Add the Script</div>
        <p>
          Add this script to your webpage to insert the testimonials carousel
        </p>
      </div>
      <Tabs defaultValue="account" className="max-w-[900px] my-8 ">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Code</TabsTrigger>
          <TabsTrigger value="password">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card className="bg-[#2A323C]">
            <CardContent className="space-y-2">
              {username && (
                <CodeSnippet
                  language="jsx"
                  code={`<script src="${process.env.NEXT_PUBLIC_APP_URL}/api/testimonials-widget" username="${username} "></script>`}
                />
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password" className="overflow-hidden">
          <Card className="bg-[#1D232A] flex justify-center items-center">
            <CardContent className="text-center pt-2">
              <p className="text-4xl font-bold text-white text-center my-6">
                Testimonials
              </p>
              <div className="flex overflow-hidden space-x-16 h-auto group">
                <div className="flex space-x-16 animate-loop-scroll bg-[#1D232A] py-2 group-hover:paused">
                  {testimonials &&
                    testimonials.map((testimonial: Testimonial) => (
                      <div
                        key={String(testimonial._id)}
                        className="rounded-lg shadow-md p-4 bg-[#2A323C] min-w-[400px]"
                      >
                        <div className="text-center">
                          <Image
                            src={testimonial.image}
                            alt="testimonial"
                            width={96}
                            height={96}
                            className="w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-white"
                          />
                          <h2 className="text-white font-medium title-font tracking-wider text-md">
                            {testimonial.name}
                          </h2>
                          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-2 mb-4"></span>
                          <p className="leading-relaxed text-white">
                            {testimonial.message}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="flex space-x-16 animate-loop-scroll bg-[#1D232A] py-2 aria-hidden:true group-hover:paused">
                  {testimonials &&
                    testimonials.map((testimonial: Testimonial) => (
                      <div
                        key={String(testimonial._id)}
                        className="rounded-lg shadow-md p-4 bg-[#2A323C] min-w-[400px]"
                      >
                        <div className="text-center">
                          <Image
                            src={testimonial.image}
                            alt="testimonial"
                            width={96}
                            height={96}
                            className="w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-white"
                          />
                          <h2 className="text-white font-medium title-font tracking-wider text-md">
                            {testimonial.name}
                          </h2>
                          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-2 mb-4"></span>
                          <p className="leading-relaxed text-white">
                            {testimonial.message}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <div className="text-white mb-2 mt-6">
        <div className="text-2xl fond-bold mb-2">Position the Button</div>
        <p>
          By default, the testimonials carousel appears at the bottom of your
          page. To place it inside a container(div, etc.), add the
          &quot;data-testimonials-carousel&quot; attribute to any element:
        </p>
        <CodeSnippet
          language="jsx"
          code={`<div data-testimonials-carousel>
      <!-- Button will appear here -->
    </div>`}
        />
      </div>
    </div>
  )
}
