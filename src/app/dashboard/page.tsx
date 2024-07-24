'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function DashboardPage() {

    const router = useRouter();
   // const [userId, setUserId] = useState(null);

    useEffect(()=> {
        const redirectUser = async() => {
          try {
            const response = await axios.post('/api/auth/me');
            console.log("iid", response.data.data._id);
            // console.log(`/dashboard/${userId}`);
            router.replace(`/dashboard/${response.data.data._id}/selected-testimonials`);
          } catch (err: any) {
            console.log("user unauthorized", err);
          }
        }
        redirectUser();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
  return (
    <div>
      
    </div>
  )
}
