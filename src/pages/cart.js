'use client'
import React, { useContext } from 'react'
import { Cartcontext } from '../../utils/Cartcontext'
import Image from 'next/image'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Nav from '../../Components/Nav'
import { useSession } from 'next-auth/react'


function Cart() {
    const { state, dispatch } = useContext(Cartcontext)
    const { data: session } = useSession()
    const { cartitems } = state
    const router = useRouter()

    return (
        <div>
            <Nav />
            <section className=' pt-24 relative  '>

                <section>
                    {
                        cartitems.map((cartItem) => (
                            <div key={cartItem.slug} className=' my-2 shadow-md flex h-max md:h-28 items-center bg-white p-2 lg:max-w-[80%] overflow-hidden' >
                                <Link href={`/item/${cartItem.slug}`}>
                                    <Image src={cartItem.image} alt={cartItem.name} height={80} width={100} />
                                </Link>

                                <div className='flex flex-col items-center gap-[7%] md:flex-row w-[60%] '>
                                    <div className=' flex w-full'>
                                        <span>name: <b>{cartItem.name}</b></span>
                                        <span>price:  <b>${cartItem.price}</b></span>
                                    </div>




                                    <div className=' flex gap-[5rem] md:gap-16 my-2'>

                                        {/* quantity increament/decreament */}
                                        <div className=' flex items-center gap-[2rem]'>

                                            <AiOutlinePlus size={20} className=' border border-spacing  ' onClick={() => {


                                                const existing = cartitems.find((item) => item.slug === cartItem.slug)
                                                const quantity = existing ? (existing.quantity === cartItem.countInStock ? cartItem.countInStock : existing.quantity += 1) : cartItem.quantity

                                                dispatch({ type: "ADD_TO_CART", payload: cartItem, quantity })

                                            }} />

                                            {cartItem.quantity}

                                            <AiOutlineMinus size={20} className=' border border-spacing'
                                                onClick={() => {
                                                    const existing = cartitems.find((item) => item.slug === cartItem.slug)
                                                    let quantity = existing ? (existing.quantity === 1 ? 1 : existing.quantity -= 1) : cartItem.quantity

                                                    dispatch({ type: "ADD_TO_CART", payload: cartItem, quantity })


                                                }} />
                                        </div>



                                        {/* delete button */}
                                        <button className=' p-2 bg-red-700 text-white rounded-md w-[60%] md:w-max' onClick={() => {
                                            dispatch({ type: "REMOVEITEM_CART", payload: cartItem })
                                        }}>delete</button>
                                    </div></div>
                            </div>))
                    }
                </section>

                <section className=' flex-col items-center bg-white p-5 shadow-lg text-center lg:w-[50%] mt-8'>
                    <p className=' mb-6'>total items in cart : <b>{cartitems.reduce((a, b) => a + b.quantity, 0)}</b></p>
                    <button className=' w-72 p-3 bg-purple-800 text-white rounded-lg active:bg-purple-900'
                        onClick={() => {
                            if (!session?.user) { router.push('/login') }
                            else if (state.shipping.isCompleted === true) { router.push('/checkout/payment') }
                            else { router.push('/checkout/shipping') }
                        }}>checkOut $({cartitems.reduce((a, b) => a + b.price * b.quantity, 0).toFixed(2)})</button>
                </section>

            </section>
        </div>
    )
}

export default Cart