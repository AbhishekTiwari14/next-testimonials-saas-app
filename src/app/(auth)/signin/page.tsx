"use client"

import { signInSchema } from '@/schemas/signInSchema'
import React, { useState } from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '@/components/ui/button'
import axios, { AxiosError } from "axios"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react';
import Link from 'next/link'



const SigninPage = () => {

    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
          email: "",
          password: ""
        },
    })

    const [isSubmitting, setIsSubmitting] = useState(false);

    const { toast } = useToast();
    const router = useRouter();


    const onSubmit = async (data: z.infer<typeof signInSchema>) => {
        setIsSubmitting(true);
        try {
            const response = await axios.post('/api/auth/signin', data);
            if(response.data.success){
              toast({
                title: 'Success',
                description: response.data.message,
              });
              setIsSubmitting(false);
              router.replace('/dashboard');
            }
            else{
              toast({
                title: 'Sign In Failed',
                description: response.data.message,
              });
            }
        } catch (error) {
            console.error('Error Signing-In:', error);
            const axiosError = error as AxiosError<any>;
            // Default error message
            let errorMessage = axiosError.response?.data.message;
            ('There was a problem with your sign-in. Please try again.');

            toast({
                title: 'Sign In Failed',
                description: errorMessage,
                variant: 'destructive',
            });
            setIsSubmitting(false);
        }
    }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md p-8 px-16 space-y-8  bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            WELCOME BACK!
          </h1>
          <p className="mb-4">Sign In with email and password</p>
        </div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='w-full' disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                'Sign In'
              )}</Button>
              <p className='text-gray-400 text-sm'>Don&apos;t have an account? <Link href='/signup' className='text-blue-500 hover:underline'>Sign Up</Link></p>
      </form>
    </Form>
    </div>
    </div>
  )
}

export default SigninPage


