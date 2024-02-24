"use client"
import React from 'react'
import CheckoutProgress from '../../../Components/checkoutProgress'
import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';




function Index() {
  const { data: session, status } = useSession();
 
  const router = useRouter()
  const { redirect } = router.query;
  
  if (status === "unauthenticated") {
    router.push(redirect || '/login');
  }

  if (status === "authenticated") {
    toast.success(`welcome ${session?.user.name}`)
    return (
      <div className='  w-full'>

        <ToastContainer />
        <CheckoutProgress />
        jdjdjdjdj

        <Button variant="contained">Hello world</Button>

      </div>
    )
  }
}

export default Index