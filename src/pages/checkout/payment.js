/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import CheckoutProgress from '../../../Components/CheckoutProgress'
import { Cartcontext } from '../../../utils/Cartcontext'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { BiEdit } from 'react-icons/bi'
import Avatarimage from '../../../Components/Avatarimage'

function Payment() {

    const router = useRouter()
    const { state, dispatch } = useContext(Cartcontext)
    const { shipping, cartitems } = state
    const { data: session } = useSession()

    if (shipping.isCompleted) {
        return (
            <div>
                <CheckoutProgress activeStep={2} />
                <section className='px-2 md:w-[90%] md:h-[85vh] mt-10 flex flex-col md:flex-row md:p-5  md:border-4 rounded-2xl'>

                    <div className='m-0 md:w-[60%] overflow-y-scroll infoPay'>
                        <div className=' bg-white p-5 shadow-lg rounded-lg '>
                            <h1 className='text-red-500 font-bold'>informaion</h1>
                            <div className=' relative h-[2rem]  flex items-center'>
                                <div className=' absolute'>
                                    <Avatarimage />
                                </div>
                                <span>{session?.user?.name}
                                </span>
                            </div>

                        </div>
                        <div className=' bg-white p-5 shadow-lg rounded-lg mt-2' >

                            <div className=' flex justify-between py-3'>
                                <h1 className='text-red-500 font-bold'> delivery information</h1>
                                <BiEdit size={20} className=' mx-2' />
                            </div>

                            <div className=' flex flex-col text-left deliveryInfo '>
                                <div><b>country:</b> <span>{shipping.country}</span></div>
                                <div><b>state:</b>  <span>{shipping.states}</span></div>
                                <div><b>city:</b> <span>{shipping.city}</span></div>
                                <div><b>address1:</b> <span>{shipping.address1}</span></div>
                                <div><b>address2:</b>  <span>{shipping.address2}</span></div>
                                <div><b> phone:</b> <span>{shipping.phone}</span></div>
                            </div>
                        </div>

                        <div className='  bg-white p-5 shadow-lg rounded-lg mt-2 '>
                            <h1 className='text-red-500 font-bold'>items in cart</h1>
                            <div>
                                <table className='itemsTabl'>
                                    <thead>
                                        <th>S/N</th>
                                        <th>item</th>
                                        <th>price</th>
                                        <th>quantity</th>
                                    </thead>
                                    <tbody>
                                        {
                                            cartitems.map((cart, index) => <tr key={cart} >
                                                <td>{index + 1}</td>
                                                <td>{cart.name}</td>
                                                <td>${cart.price}</td>
                                                <td>{cart.quantity}</td>

                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className=' border-2 rounded-md md:w-[35%] p-5'>
                        <h1 >payment method</h1>
                        <div className='flex flex-col items-center bg-white shadow-lg p-3 rounded-lg mt-6 '>
                            <div className='payment mt-7'>
                                <input placeholder='XXXX-XXXX-XXXX-XXX'></input>
                                <input></input>
                                <input></input>
                                <input></input>
                            </div>


                            <div className=' w-[90%] mt-11'>
                                <input type='button' onClick={()=> router.replace('/checkout/orders')}
                                value={`pay now  ($${cartitems.reduce((a, b) => a + b.quantity * b.price, 0)})`} 
                                className=' bg-purple-800 text-white py-3 w-full ' />
                                <input type='button' value="cancel payment" className=' bg-red-600 text-white py-3 my-3 w-full ' />
                            </div>
                        </div>

                    </div>

                </section>
            </div>
        )
    }
    else {
        router.replace('/checkout/shipping')
    }
}

export default Payment