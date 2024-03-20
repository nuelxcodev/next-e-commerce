/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react'
import { Cartcontext } from '../../utils/Cartcontext'
import { BiTrash } from 'react-icons/bi'
import Nav from '../../Components/Nav'
import Link from 'next/link'

function Wishlist() {
    const { state, dispatch } = useContext(Cartcontext)
    const { wishlist, cartitems } = state



    return (
        <div className='flex-col'>
            <Nav />
            <section className='h-max'>
            </section>
            <section className=' pt-20 lg:pt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    wishlist.map((wish) => (
                        <div key={wish.slug}
                            className=' bg-white shadow-lg m-auto w-[90%] h-52 p-7 flex  rounded-2xl'>
                            <Link href={`/item/${wish.slug}`}>
                                <img src={wish.image} alt={wish.name} className=' w-[7rem] h-[7rem]' />
                            </Link>
                            <section className=' flex h-[4rem] '>

                            </section>
                            <section className=' w-[60%]'>


                                <p> <b>name:</b> {wish.name}</p>
                                <p><b>brand:</b> {wish.brand}</p>
                                <p><b>description:</b> {wish.description}</p>


                                <section className=' flex gap-1 my-7 items-center'>
                                    <button className=' bg-purple-800 text-white p-3 rounded-lg shadow-xl w-[100%]'
                                        onClick={() => {


                                            const existing = cartitems.find((item) => item.slug === wish.slug)
                                            const quantity = existing ? existing.quantity + 1 : 1

                                            dispatch({ type: "ADD_TO_CART", payload: { ...wish, quantity } })
                                            dispatch({ type: "REMOVE_WISHLIST", payload: wish })
                                        }}>add to cart ({wish.price})</button>


                                    <BiTrash size={20} onClick={() => {

                                        dispatch({ type: "REMOVE_WISHLIST", payload: wish })
                                    }} />
                                </section>
                            </section>
                        </div>))
                }
            </section>
        </div>
    )
}

export default Wishlist;