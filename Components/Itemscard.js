"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react'

import { BiHeart } from "react-icons/bi"
import { Cartcontext } from '../utils/Cartcontext'
import { AiFillHeart } from 'react-icons/ai'
import Link from 'next/link'




function Itemscard({ product }) {
    const { state, dispatch } = useContext(Cartcontext)
    const { cartitems } = state


    const existing = cartitems.find((item) => item.slug === product.slug)
    const quantity = existing ? existing.quantity + 1 : 1
    


    return (
        <div className=' mx-2 text md:w-64  p-4 h-74 rounded-md bg-white shadow-md '>

            <div className=' overflow-hidden h-52 flex justify-center items-center'  >
                <Link href={`/item/${product.slug}`}>
                    <img src={product.image} alt={product.name} className=' w-auto h-40 imga' />
                </Link>
            </div>


            <div>
                <div className='information '>
                    <p className=' w-screen'>name: {product.name}</p>
                    <p>brand: {product.brand}</p>

                </div>

                <div className=' flex justify-between items-center py-4 '>


                    <button className=' shadow-lg bg-purple-800 text-white p-3 rounded-md active:bg-purple-900 '
                        onClick={() => {
                            // get existing data and adding quantity to it

                            dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity } })
                        }}>add to cart ${product.price}
                    </button>



                    <div className=' m-0' onClick={() => {
                        dispatch({ type: "ADDWISHLIST_CART", payload: { ...product, quantity } })
                    }}>

                        {
                            state.wishlist.find((wish) => wish.slug === product.slug)
                                ? (<AiFillHeart size={30} fill='purple' />) : (<BiHeart size={30} />)
                        }

                    </div>


                </div>

            </div>

        </div>
    )
}

export default Itemscard