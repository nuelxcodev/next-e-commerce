import React from 'react'
import CheckoutProgress from '../../../Components/checkoutProgress'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Protected } from '../../../utils/Protected';


function Index() {
  const { data: session } = useSession ();
  const router = useRouter()
  if (!session) {
    router.replace('/auth/login')
  }
  return (
    <div className='  w-full'>
      <CheckoutProgress  />

    </div>
  )
}

export default Index