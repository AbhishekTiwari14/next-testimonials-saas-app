"use client"

import { signUpSchema } from '@/schemas/signUpSchema'
import React, { useEffect, useState } from 'react'
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


const SignupPage = () => {

    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
          username: "",
          email: "",
          password: ""
        },
    })

    const [username, setUsername] = useState('');
    const [isCheckingUsername, setIsCheckingUsername] = useState(false);
    const [usernameMessage, setUsernameMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { toast } = useToast();
    const router = useRouter();

    const checkUsernameUnique = async() => {
        if(username){
            setIsCheckingUsername(true);
            setUsernameMessage(''); //reset
            try {
                const response = await axios.get(`/api/auth/check-username-unique?username=${username}`);
                setUsernameMessage(response.data.message);
            } catch (error) {
                const axiosError = error as AxiosError<any>;
                setUsernameMessage(axiosError.response?.data.message ?? 'Error checking username');
            } finally {
                setIsCheckingUsername(false);
            }
        }
    }

    useEffect(()=> {
      
        const timer =  setTimeout(()=> {
            checkUsernameUnique();
        }, 300);
        return ()=> {
          clearTimeout(timer);
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [username])

      const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
        setIsSubmitting(true);
        try {
            const response = await axios.post('/api/auth/signup', data);
            toast({
                title: 'Success',
                description: response.data.message,
            });
            
            router.replace(`/me`);
            setIsSubmitting(false);
        } catch (error) {
            console.error('Error during sign-up:', error);
            const axiosError = error as AxiosError<any>;
            // Default error message
            let errorMessage = axiosError.response?.data.message;
            ('There was a problem with your sign-up. Please try again.');

            toast({
                title: 'Sign Up Failed',
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
            SIGN UP
          </h1>
          <p className="mb-4">Register to Testimonials and get 20 free testimonial tokens</p>
        </div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
                  <FormLabel>Username</FormLabel>
                  <Input
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setUsername(e.target.value);
                    }}
                  />
                  {isCheckingUsername && <Loader2 className="animate-spin" />}
                  {!isCheckingUsername && usernameMessage && (
                    <p
                      className={`text-sm ${
                        usernameMessage === 'Username is unique'
                          ? 'text-green-500'
                          : 'text-red-500'
                      }`}
                    >
                      {usernameMessage}
                    </p>
                  )}
                  <FormMessage />
                </FormItem>
          )}
        />
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
                'Sign Up'
              )}</Button>
      </form>
    </Form>
    </div>
    </div>
  )
}

export default SignupPage
