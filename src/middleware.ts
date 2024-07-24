import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from "jsonwebtoken" 
import axios from 'axios';


export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = ['/', '/signin', '/signup'].includes(path);

    const token = request.cookies.get("token")?.value || "";

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL(`/dashboard/`, request.nextUrl))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/signin', request.nextUrl))
    }
    
}

 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/signup',
    '/signin',
    '/dashboard/:path*'
  ]
}