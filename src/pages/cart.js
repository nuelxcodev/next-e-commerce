import React, { useContext } from 'react'
import { Cartcontext } from '../../utils/Cartcontext'
import Image from 'next/image'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Nav from '../../Components/Nav'


function Cart() {
    const { state, dispatch } = useContext(Cartcontext)
    const { cartitems } = state
    const router = useRouter()




    return (
        <div>
            <Nav />
            <section className=' pt-16 md:pt-0 relative  '>

                <section className=' flex-col items-center justify-center'>
                    {
                        cartitems.map((cartItem) => (<div key={cartItem.slug} className=' my-2 shadow-md flex h-max md:h-28 items-center bg-white p2 lg:max-w-[80%] overflow-hidden' >
                            <Link href={`/item/${cartItem.slug}`}>
                                <Image src={cartItem.image} alt={cartItem.name} height={80} width={100} />
                            </Link>

                            <div className='cartinfo w-[60%] lg:w-auto'>

                                <div>name: {cartItem.name}</div>
                                <div>price:  ${cartItem.price}</div>





                                {/* quantity increament/decreament */}
                                <div className=' flex items-center'>

                                    <AiOutlinePlus size={20} className=' border border-spacing' onClick={() => {


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


                                        }} /></div>



                                {/* delete button */}
                                <button className=' p-2 bg-red-700 text-white rounded-md ' onClick={() => {
                                    dispatch({ type: "REMOVEITEM_CART", payload: cartItem })
                                }}>delete</button>
                            </div>
                        </div>))
                    }
                </section>

                <section className=' flex-col items-center bg-white p-5 shadow-lg text-center lg:w-[50%] mt-8'>
                    <p className=' mb-6'>total items in cart : <b>{cartitems.reduce((a, b) => a + b.quantity, 0)}</b></p>
                    <button className=' w-72 p-3 bg-purple-800 text-white rounded-lg active:bg-purple-900'
                        onClick={() => { router.push("/checkout") }}>checkOut $({cartitems.reduce((a, b) => a + b.price * b.quantity, 0)})</button>
                </section>

            </section>
        </div>
    )
}

export default Cart