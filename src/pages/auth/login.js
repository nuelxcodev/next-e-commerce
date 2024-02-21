/* eslint-disable no-unused-vars */
"use client"
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import googlbg from "../../../public/images/google-logo.png"
import Image from 'next/image'
import { AiFillGithub } from 'react-icons/ai'

function Login() {
    const [errormsg, seterror] = useState("")
    const { data: session } = useSession()

    const router = useRouter()
    const submithandler = async ({ email, password }) => {
        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false
            })
            if (res.error) {
                seterror("email or password is incorrect!.. please try again!..")
                return
            } router.replace("/")


        } catch (error) {
            console.log(error)
        }
    }
    console.log(errormsg)

    const {
        register,
        handleSubmit,
        formState: { error }
    } = useForm()


    return (
        <div >
            <p className=' text-3xl mt-3 text-center'>Sign in</p>
            <form className='signIn' onSubmit={handleSubmit(submithandler)}>

                <span className={` text-red-600 mb-7 bg-red-100 py-2 px-3 border-l-4 border-red-600 rounded-md ${!errormsg ? "hidden" : "block"}`}>{errormsg}</span>

                <label htmlFor='email'>email:</label>
                <input type="text" id='email' className=' mb-2'
                    {...register("email")} />

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


                <input type='submit' value="login"
                    className=' bg-purple-800 text-white active:bg-purple-900' />



                {/* o2auth */}
                <section className='oauth w-[90%] text-center mb-5 '>
                    <p className='mt-8 '>or</p>

                    <button onClick={() => signIn("google")} className=' text-white shadow-sm flex border items-center justify-center w-full my-5 rounded-md'>
                        <Image src={googlbg} alt="google" heigth={100} width={30} className=' mx-2' />
                        <span className=' py-3 m-0'>{
                            !session ? (<p>signIn with google</p>) : (<p className=' text-sm'>sigin as {session.user.email}</p>)
                        }</span>
                    </button>

                    <button onClick={() => signIn('github')} className='  text-white shadow-sm border flex items-center justify-center w-full my-5 rounded-md'>
                        <AiFillGithub size={30} className='m-0' />
                        <span className=' py-3 m-0'>sigin with github</span>
                    </button>

                </section>
                <div className='w-max'>
                    dont have an account?
                    <Link href="/auth/register" className=' w-full p-1 text-purple-400 underline'>register</Link>
                </div>
            </form >
        </div >
    )
}

export default Login