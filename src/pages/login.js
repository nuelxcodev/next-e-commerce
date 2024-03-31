"use client"
/* eslint-disable no-unused-vars */
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import SiginNav from '../../Components/SiginNav'




export default function Login() {

    // const session = await auth();
    const router = useRouter()

    const { redirect } = router.query;




    return (
        <div >

            <p className=' text-3xl mt-3 text-center'>Sign in</p>
            <SiginNav />
        </div >
    )
}

