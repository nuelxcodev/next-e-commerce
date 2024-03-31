'use client'
/* eslint-disable no-unused-vars */
import axios from 'axios'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import googlbg from "../../public/images/google-logo.png"





function Register() {
    const { data: session } = useSession()
    const router = useRouter();
    const { redirect } = router.query;

    useEffect(() => {
        if (session?.user) {
            router.push(redirect || '/');
        }
    }, [router, session, redirect]);


    const submitHandler = (data) => {

        axios.post('/api/auth/signup', data)
            .then((response) => { console.log(response); })
    }
    const {
        register,
        handleSubmit,
        formState: { error }
    } = useForm()



    // registeration page
    return (
        <div >
            <p className=' text-3xl mt-3 text-center'>Sign up</p>
            <form className='signIn' onSubmit={handleSubmit(submitHandler)}>

                {/* username */}
                <label htmlFor='username'>username:</label>
                <input type="text" id='username' className=' mb-2'
                    {...register("name", { required: true })} />

                {/* email */}
                <label htmlFor='email'>email:</label>
                <input type="text" id='email' className=' mb-2'
                    {...register("email", { required: true })} />

                {/* password */}
                <label htmlFor='password'>password:</label>
                <input type="password" id='password'
                    {...register("password", { required: true })} />

                <div className=' w-full mb-5 pl-3 pt-1'>
                    <input type="checkbox" id='showpws' onChange={(e) => {
                        if (e.target.checked) {
                            if (document.getElementById("password").type === "password") { document.getElementById("password").type = "text" }
                        } else { document.getElementById("password").type = "password" }
                    }} />
                    <label htmlFor='showpws' >show password</label>
                </div>


                <input type='submit' value="login" className=' bg-purple-800 text-white active:bg-purple-900' />
                {/* o2auth */}
                <section className='oauth w-[90%] text-center mb-5 '>
                    <p className='mt-8 '>or</p>

                    <button onClick={() => signIn("google")} className=' text-white shadow-sm flex border items-center justify-center w-full my-5 rounded-md'>
                        <Image src={googlbg} alt="google" heigth={100} width={30} className=' mx-2' />
                        <span className=' py-3 m-0'>{
                            !session ? (<p>signIn with google</p>) : (<p className=' text-sm'>sigin as {session.user.email}</p>)
                        }</span>
                    </button>

                </section>
                <div className=' w-max'>
                    alreaady have an account? &nbsp;
                    <Link href={`/login?redirect=${redirect || '/'}`} className=' text-purple-800'>Login</Link>
                </div>
            </form >

        </div >
    )
}


export default Register