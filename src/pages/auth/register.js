/* eslint-disable no-unused-vars */
import axios from 'axios'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'





function Register() {

   

    const router = useRouter();



    const submitHandler = (data) => {
        
         axios.post('/api/auth/register', data).then((response) => { console.log(response); })
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
                    <p className='mt-8'>or</p>
                  

                </section>
                <div className=' w-max'>
                    already have an account?
                    <Link href="/auth/login" className=' w-full p-1 text-purple-400 underline'>signin</Link>
                </div>
            </form >

        </div >
    )
}


export default Register