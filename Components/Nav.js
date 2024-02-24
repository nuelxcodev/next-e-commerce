
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { AiOutlineDown, AiOutlineHeart, } from "react-icons/ai"
import { BiCartAlt, BiMenu, BiSearch, BiStore, BiUserCircle } from "react-icons/bi"
import { Cartcontext } from '../utils/Cartcontext'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Cartegorymenu from './Cartegorymenu'
import data from '../utils/Data'
import { signOut, useSession } from 'next-auth/react'
import Avatarimage from './Avatarimage'




function Nav() {
    const { state, distpatch } = useContext(Cartcontext)
    const { cartitems, wishlist } = state
    const router = useRouter()
    const { data: session } = useSession();


    const [search, setsearch] = useState("")
    const [menudwn, setmenudwn] = useState(false)
    const [menudwn2, setmenudwn2] = useState(false)

    return (
        <div className=' fixed w-screen h-16 flex flex-col md:relative md:justify-around md:flex-row lg:justify-between py-3 items-center shadow-md  bg-white z-50' >
            <div className='flex justify-between w-full lg:w-max'>
                <div className=' text-purple-800 font-bold mx-3'>NUELmat.com</div>
                <div className='mr-4 lg:hidden lg:mr-0 relative '>
                    <BiMenu size={35} onClick={() => {
                        if (menudwn === false) {
                            setmenudwn(true)
                        } else { setmenudwn(false) }
                    }} />
                    <span className={`absolute -top-1 bg-red-700 px-1 text-white rounded-2xl text-[12px] right-0  ${menudwn === false ? 'block' : 'hidden'}`}>
                        {cartitems.reduce((a, b) => a + b.quantity, 0) + wishlist.length}</span>
                </div>

            </div>


            <div className={`w-full  flex-col-reverse  md:flex-row md:absolute md:pr-11 md:top-16 lg:top-0 lg:relative lg:pr-0 ${menudwn === false ? 'hidden lg:flex' : "flex shadow-xl"} `}>

                <div className=' bg-white flex flex-col w-full items-center lg:flex-row lg:mt-0 '>
                    {/* searchbar */}
                    <div className='w-[80%] lg:w-[30vw] h-max flex items-center px-2 border-2 rounded-2xl lg:mr-9 relative my-4 lg:my-0'>

                        {/* search bar */}
                        <input type='text' placeholder='search....' className='p-1 bg-transparent w-[100%] outline-0'
                            onChange={(e) => { setsearch(e.target.value) }}
                            onKeyUp={() => {
                                if (search.length > 0) { document.getElementById('sugest').style.display = "block" }
                                else { document.getElementById('sugest').style.display = "none" }
                            }} />

                        {/* searchbar icon */}
                        <BiSearch onClick={() => {
                            document.getElementById('sugest').style.display = "none"
                            router.push({ pathname: "/products", query: { search: search } })
                        }} />

                        {/* word sugestion container */}
                        <section className=' rounded-md absolute h-max top-[100%] left-0 bg-white w-full p-3 overflow-hidden hidden' id='sugest'>
                            <div className=' active:bg-gray-400 active:text-white p-3'>{search}</div>
                        </section>
                    </div>



                    <div className='w-full my-4 md:hidden'>
                        {session ? (
                            <div className='flex justify-around '>
                                <div className='m-0'>
                                    <Avatarimage />
                                </div>
                                <input type='button' className=' bg-yellow-400 py-1 px-3 rounded-md active:text-white'
                                    value='logout' onClick={() => signOut()} />
                            </div>) : (
                            <div className=' w-[65%] mb-3'><Link href="/auth/login">login</Link></div>
                        )}
                    </div>



                    <ul className=' mb-7 flex w-full flex-col gap-6 items-center lg:flex-row lg:w-max lg:mb-0'>
                        {/* home */}
                        <li>
                            <Link href="/">
                                <input type='button'
                                    value="home"
                                    className=' focus:text-purple-800 focus:font-bold' />
                            </Link>
                        </li>


                        {/* category */}
                        <li className="flex items-center justify-between cursor-pointer" id="catclick" onClick={() => {
                            const catmenu = document.getElementById('catmenu');
                            const self = document.getElementById('catclick');

                            if (catmenu.style.display === 'none') {
                                self.style.color = "purple";
                                catmenu.style.display = 'block';
                                catmenu.style.transition = "1s"
                            } else {
                                self.style.color = "initial";
                                catmenu.style.display = 'none';
                            }

                        }}><span className='m-0 w-full'>category</span>
                            <AiOutlineDown /></li>

                        {/* product */}
                        <li><Link href={{ pathname: '/products' }}>product</Link></li>
                    </ul>
                </div >

                <Cartegorymenu />



                {/* nav icons { cart, wishlist, store} */}
                <section className='flex px-7 bg-white w-full flex-row md:w-max md:flex-col py-6 lg:py-0 lg:w-max lg:flex-row lg:items-center icons-cont'>
                    <div className=' relative ' onClick={() => {
                        router.push("/cart")
                    }}>
                        <BiCartAlt size={30} className='mx-3 focus:text-purple-800' />
                        <span className=' absolute -top-1 bg-red-700 px-1 text-white rounded-2xl text-[12px] right-2'>
                            {cartitems.reduce((a, b) => a + b.quantity, 0)}</span>
                    </div>


                    <div className='relative' onClick={() => router.push("/wishlist")}>
                        <AiOutlineHeart size={30} className='mx-3 active:text-purple-800' />
                        <span className=' absolute -top-1 bg-red-700 px-1 text-white rounded-2xl text-[12px] right-2'>
                            {wishlist.length}</span>
                    </div>

                    <div>
                        <BiStore size={30} className='mx-3 active:text-purple-800' />
                    </div>
                </section>

            </div>
            {/* user icon menue */}
            <section className='hidden relative md:w-[100%] lg:w-[30%]  h-16 md:flex items-center justify-center active:text-purple-900 cursor-pointer' onClick={() => {
                if (menudwn2 === false) {
                    setmenudwn2(true)
                } else { setmenudwn2(false) }

            }}>
                <div className=' m-0'>
                    <Avatarimage />
                </div>


                <section className={`absolute bg-white w-[100%] shadow-lg p-5 top-[9vh] lg:-left-7 ${menudwn2 === false ? "hidden" : "block"}`} >
                    <section className='flex flex-col loginbtn'>{
                        !session ? (<div><Link href="login">login</Link></div>) : (<div>profile</div>)
                    }
                        <div><input type='button' value="logOut" onClick={() => signOut()} /></div>
                    </section>
                </section>
            </section>


        </div>
    )
}

export default Nav