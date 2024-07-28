import CodeSnippet from '@/components/codeSnippet'
import React from 'react'
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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from 'next/link'


export default function CollectTestimonialsGuidePage() {

  return (
    <div className='bg-[#1D232A] ml-20 my-6 w-4/5'>
      <Breadcrumb>
        <BreadcrumbList className='text-gray-300'>
          <BreadcrumbItem>
            <BreadcrumbLink className='hover:text-green-400'>Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className='hover:text-green-400'>Guide</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className='text-white '>
            <BreadcrumbLink className='hover:text-green-400'>Collect Testimonials</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='text-white my-8'>
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
            `<Link href='http://localhost:3000/write-testimonial?username=one' target='_blank'>  // enter your username here
              <button className = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-red-600 h-10 px-4 py-2"> 
                Write Testimonial 
              </button>
            </Link>`}  />
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
  )
}
