import React from 'react'
import { Button } from './ui/button'

export default function PricingCard({plan} : {plan: string}) {
  return (
    <div className='mx-auto flex flex-col mt-3 w-full border-2 border-gray-400 rounded-md'>
        <div className='flex justify-between p-3'>
          <p>{plan} Plan</p>
          <Button variant="outline">Get Package</Button>
        </div>
        <div>
            <p>₹0</p>
        </div>
    </div>
  )
}
