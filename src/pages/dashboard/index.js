import React from 'react'
import Avatarimage from '../../../Components/Avatarimage'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Admin({ children }) {
    const navs = ["profile", "chart", "sales", "history", "products"]
    const navs2 = ["home", "cart", "orders"]

    const { data: session, status } = useSession()

    const router = useRouter()

    if (status === "authenticated")
        return (
            <div >
                <section className=' bg-white shadow-lg py-5'>
                    <div className='flex justify-around md:w-[50%] md:border-2 rounded-lg items-center '>
                        {
                            navs2.map(nav => (
                                <Link key={nav}
                                    className="active:text-white active:bg-purple-800  text-center p-3 rounded-lg w-[33.3%]"
                                    href={nav === "home" ? "/" : `/${nav}`}>{nav}</Link>
                            ))
                        }
                        <div className=' flex'>
                            <Avatarimage />
                        </div>
                    </div>

                </section>
                <section className='flex flex-col md:flex-row  h-[80vh]'>
                    <aside className='adminNav gap-2 mt-2'>
                        {
                            navs.map(nav => (<button key={nav}
                                className={`md:w-[90%] mx-0 my-1 text-left px-4 py-3 shadow-lg
                             rounded-lg active:bg-zinc-100 ${router.pathname === `/dashboard/${nav}` || router.pathname === `/dashboard/${nav}/[product]` ? "bg-zinc-500 text-white" : "bg-white"}`}
                                onClick={() => router.replace(`/dashboard/${nav}`)}>{nav}</button>))
                        }

                    </aside>
                    <aside className='w-full border md:w-[75%] md:p-3 md:overflow-y-scroll'>
                        {children ? <div>{children} </div> : (
                            <div className=' flex justify-center items-center h-screen md:h-full'>
                                <h1>welcome Admin</h1>
                                {session?.user?.email}
                            </div>
                        )}
                    </aside>
                </section>
            </div>
        )
    router.replace('/login')
}


export default Admin;