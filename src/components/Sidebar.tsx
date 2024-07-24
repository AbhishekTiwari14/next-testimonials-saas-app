'use client'

import Link from 'next/link'
import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { usePathname } from 'next/navigation'
import axios from 'axios'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'

type sidebarProp = {
    userId: string
}

export default function Sidebar({userId} : sidebarProp) {
    const pathname = usePathname();
    const router = useRouter();
    const { toast } = useToast();

    const handleLogout = async() => {
        try {
            const response = await axios.get('/api/auth/logout');
            if(response.data.success){
                toast({
                title: response.data.message,
                });
                router.replace('/');
            }   
        } catch (error) {
            console.error('Logout API Error:', error);
        }
    }

  return (
    <div className='fixed'>
      <aside className='flex flex-col text-gray-300 py-8 pl-4 space-y-4 mt-4 justify-center'>
        <div className='flex flex-row my-2 space-x-4 font-semibold'>
            <p>Profile</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
            </svg>
        </div>
        <Link href = {`http://localhost:3000/dashboard/${userId}/user-details`}>
            <p className={pathname.includes('/user-details') ? 'text-white bg-gray-700 rounded-lg px-2 py-1' : 'text-gray-300 hover:text-white'}>User Details</p> 
        </Link>


        <AlertDialog>
      <AlertDialogTrigger asChild>
        <p className='text-gray-300 hover:text-white hover:cursor-pointer'>Logout</p>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to log out?</AlertDialogTitle>
          <AlertDialogDescription>
            You will have to sign in again with your email and password to access your dashboard.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleLogout}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
        
        <Separator />

        <div className='flex flex-row my-2 space-x-4 font-semibold'>
            <p>Testimonials</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M6.912 3a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H6.912Zm13.823 9.75-2.213-7.191A1.5 1.5 0 0 0 17.088 4.5H6.912a1.5 1.5 0 0 0-1.434 1.059L3.265 12.75H6.11a3 3 0 0 1 2.684 1.658l.256.513a1.5 1.5 0 0 0 1.342.829h3.218a1.5 1.5 0 0 0 1.342-.83l.256-.512a3 3 0 0 1 2.684-1.658h2.844Z" clipRule="evenodd" />
            </svg>
        </div>
        <Link href={`http://localhost:3000/dashboard/${userId}/selected-testimonials`}>
            <p className={pathname.includes('/selected-testimonials') ? 'text-white bg-gray-700 rounded-lg px-2 py-1' : 'text-gray-300 hover:text-white'}>Selected</p>
        </Link>
        <Link href="/">
            <p>Archived</p>
        </Link>

        <Separator />

        <div className='flex flex-row my-2 space-x-4 font-semibold'>
            <p>Guide</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z" clipRule="evenodd" />
                <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
            </svg>
        </div>
        <Link href={`http://localhost:3000/dashboard/${userId}/guide/collect-testimonials`}>
            <p className={pathname.includes('/collect-testimonials') ? 'text-white bg-gray-700 rounded-lg px-2 py-1' : 'text-gray-300 hover:text-white'}>Collect Testimonials</p>
        </Link>
        <Link href={`http://localhost:3000/dashboard/${userId}/guide/display-testimonials`}>
            <p className= {pathname.includes('/display-testimonials') ? 'text-white bg-gray-700 rounded-lg px-2 py-1' : 'text-gray-300 hover:text-white'}>Display Testimonials</p>
        </Link>
      </aside>
    </div>
  )
}
