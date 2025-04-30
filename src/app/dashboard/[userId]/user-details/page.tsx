"use client"

import axios from "axios"
import React, { useEffect, useState } from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function UserDetailsPage() {
  interface userDetails {
    username: string
    email: string
    plan: string
    testimonials: []
  }
  const [user, setUser] = useState<userDetails | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.post("/api/auth/me")
        if (response.data) {
          setUser(response.data.data)
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
              Profile
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-white ">
            <BreadcrumbLink className="hover:text-green-400">
              User Details
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {user && (
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold text-white mt-8 mb-4">
            User Details
          </h1>

          <div className="flex flex-col space-y-2 border-b border-gray-700 pb-4">
            <div className="flex items-center">
              <span className="w-24 font-medium text-gray-300">Username:</span>
              <span className="ml-2 text-white">{user.username}</span>
            </div>
            <div className="flex items-center">
              <span className="w-24 font-medium text-gray-300">Email:</span>
              <span className="ml-2 text-white">{user.email}</span>
            </div>
            <div className="flex items-center">
              <span className="w-24 font-medium text-gray-300">Plan:</span>
              <span className="ml-2 text-white">{user.plan}</span>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <span className="w-24 font-medium text-gray-300">
                Testimonial Page URL:
              </span>
              <span className="ml-2 text-white hover:cursor-pointer hover:text-blue-400">
                ${process.env.NEXT_PUBLIC_APP_URL}/write-testimonial?username=
                {user.username}
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-24 font-medium text-gray-300">
                Testimonials API Endpoint:
              </span>
              {/* <span className="ml-2 text-white hover:cursor-pointer hover:text-blue-400">
                http://localhost:3000/api/testimonials/{user.username}
              </span> */}
              <span>
                <pre>
                  &lt;script&gt; src=&quot;${process.env.NEXT_PUBLIC_APP_URL}
                  /api/testimonials-widget&quot; username={user.username}&gt;
                </pre>
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-24 font-medium text-gray-300">
                Testimonials Received:
              </span>
              <span className="ml-2 text-white">
                {user.testimonials.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
