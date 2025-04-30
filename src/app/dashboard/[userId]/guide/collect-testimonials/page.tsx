"use client"

import CodeSnippet from "@/components/codeSnippet"
import React, { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"
import axios from "axios"

export default function CollectTestimonialsGuidePage() {
  const [username, setUsername] = useState<string | null>(null)

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
        <h2 className="text-3xl font-bold mb-8">Collect Testimonials</h2>
        <div className="text-2xl fond-bold mb-2 ">Add the Script</div>
        <p>
          Add this script to your webpage to insert the testimonials collection
          button
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
                  code={`<script src="${process.env.NEXT_PUBLIC_APP_URL}/api/widget" username="${username}" text="Leave a feedback" color="blue" hover="red"></script>`}
                />
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card className="bg-[#2A323C]  flex justify-center items-center">
            <CardContent className="text-center pt-2">
              {username && (
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/write-testimonial?username=${username}`}
                  target="_blank"
                >
                  <button
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-red-600 h-10 px-4 py-2`}
                  >
                    Leave a feedback
                  </button>
                </Link>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <div className="text-white mb-2 mt-4">
        <div className="text-2xl fond-bold mb-2">Customize Your Button</div>
        <ul className="text-lg flex flex-col gap-2">
          <li>
            <button className="bg-gray-600 py-1 px-2 rounded-lg">text: </button>
            {"  "}
            Button text (e.g., &quot;Rate us!&quot;)
          </li>
          <li>
            <button className="bg-gray-600 py-1 px-2 rounded-lg">
              color:{"   "}
            </button>
            {"  "}
            Button color (e.g.,&quot;blue&quot; or &quot;#ff5500&quot;)
          </li>
          <li>
            <button className="bg-gray-600 py-1 px-2 rounded-lg">
              hover:{"   "}
            </button>
            {"    "}
            Button hover color (e.g., &quot;red&quot; or &quot;#00aaff&quot;)
          </li>
        </ul>
      </div>
      <div className="text-white mb-2 mt-6">
        <div className="text-2xl fond-bold mb-2">Position the Button</div>
        <p>
          By default, the button appears in the bottom-left corner of your page.
          To place it inside a container(div, etc.), add the
          &quot;data-testimonials-btn&quot; attribute to any element:
        </p>
        <CodeSnippet
          language="jsx"
          code={`<div data-testimonials-btn>
  <!-- Button will appear here -->
</div>`}
        />
      </div>
    </div>
  )
}
