import CodeSnippet from '@/components/codeSnippet'
import React from 'react'
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function CollectTestimonialsGuidePage() {
  return (
    <div className='bg-[#1D232A]'>
    <Tabs defaultValue="account" className="lg:w-1/2 mx-auto my-8 ">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Code</TabsTrigger>
        <TabsTrigger value="password">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>JSX</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
          <CodeSnippet language='jsx' code= {
            `<a href='http://localhost:3000/write-testimonial?username=one' >
              <button className = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"> 
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
            <CardDescription className = 'bg-[#2A323C]'>
              Click on the Write Testimonial page to write testimonial for username 'one'
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button>Write Testimonial</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  )
}
