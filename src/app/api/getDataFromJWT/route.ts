import NextResponse, { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request: NextRequest){
    const token = request.cookies.get('token')?.value;
    if (token) {
        try {
            const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
            return decodedToken.id;
        } catch (error: any) {
          // Handle decoding errors (e.g., return a 401 response)
          throw new Error(error.message);
        }
      }
}