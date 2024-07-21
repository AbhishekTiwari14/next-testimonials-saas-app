'use client'


import React, { ChangeEvent, useState } from 'react'
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
import { Loader2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { testimonialSchema } from '@/schemas/testimonialSchema'
import { useRouter, useSearchParams } from 'next/navigation'
import { Textarea } from "@/components/ui/textarea"
import UserModel from '../models/User'
import Image from "next/image";
import { isBase64Image } from '@/lib/utils'
import { useUploadThing } from '@/lib/uploadThing'

const WriteTestimonialPage = () => {
  const form = useForm<z.infer<typeof testimonialSchema>>({
      resolver: zodResolver(testimonialSchema),
      defaultValues: {
        name: "",
        message: "",
        image: "",
        createdAt: new Date()
      },
  })

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const {startUpload} = useUploadThing("media");

  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const username = searchParams.get('username')

  const onSubmit = async(data: z.infer<typeof testimonialSchema>) => {
    setIsSubmitting(true);
    const blob = data.image;
    const hasImageChanged = isBase64Image(blob);

    if(hasImageChanged){
      const imgRes = await startUpload(files);  

      if(imgRes && imgRes[0].url){
        data.image = imgRes[0].url;
      }
    }
    try {
      const response = await axios.post('/api/write-testimonial', {
        ...data,
        username,
      });

      toast({
        title: response.data.message,
        variant: 'default',
      });
      form.reset({ ...form.getValues(), image: '', name: '', message: '' });
      setFiles([]);
      } catch (error) {
        const axiosError = error as AxiosError<any>;
        toast({
          title: 'Error',
          description:
            axiosError.response?.data.message ?? 'Failed to send testimonial',
          variant: 'destructive',
        });
      } finally {
        setIsSubmitting(false);
    }
  }

  const handleImage = (e: ChangeEvent<HTMLInputElement>, fieldChange: (value: string) => void) => {
    e.preventDefault();
    const fileReader = new FileReader();
    if(e.target.files && e.target.files.length > 0){
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));

      if(!file.type.includes('image')) return;

      fileReader.onload = async(event) => {
        const imageDataUrl = event.target?.result?.toString() || '';
        fieldChange(imageDataUrl);
      }
      fileReader.readAsDataURL(file);
    }
  }
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="w-full max-w-lg p-8 px-16 space-y-8  bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-xl font-bold tracking-tight lg:text-4xl mb-2">
            WRITE TESTIMONIAL
          </h1>
          <p className="mb-1">Tell us how much you liked our product</p>
        </div>

      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <FormField
          control={form.control}
          name='image'
          render={({ field }) => (
            <FormItem className='flex items-center gap-4'>
            <div>
              <FormLabel className='account-form_image-label w-24 h-24 flex justify-center items-center max-h-full max-w-full'>
                {field.value ? (
                  <Image
                    src={field.value}
                    alt='profile_icon'
                    width={96}
                    height={96}
                    priority
                    className='rounded-full object-cover h-full w-full'
                  />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>

                )}
              </FormLabel>
              </div>
              <FormControl className='flex-1 text-base-semibold text-gray-200'>
                <Input
                  type='file'
                  accept='image/*'
                  placeholder='Add profile photo'
                  className='account-form_image-input'
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
              <Textarea
                  placeholder="Write Your Testimonial Here"
                  rows={10}
                  className="resize-y"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='w-full mt-9' disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                'Submit'
              )}</Button>
      </form>
    </Form>
    </div>
    </div>
  )
}

export default WriteTestimonialPage


