/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import CheckoutProgress from '../../../Components/CheckoutProgress'
import { Cartcontext } from '../../../utils/Cartcontext'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { BiEdit } from 'react-icons/bi'
import Avatarimage from '../../../Components/Avatarimage'
import { PaystackButton } from 'react-paystack'
import { loadStripe } from '@stripe/stripe-js'
import { FaCcStripe } from "react-icons/fa";


function Payment() {

    const [email, setemail] = useState("")
    const [currentemail, setcurrentemail] = useState(false)

    const router = useRouter()
    const { state, dispatch } = useContext(Cartcontext)
    const { shipping, cartitems } = state
    const { data: session } = useSession()

    const amount = cartitems.reduce((a, b) => a + b.quantity * b.price, 0).toFixed(2)

    // paystack payment 
    const config = {
        reference: (new Date()).getTime().toString(),
        email: currentemail ? session?.user?.email : email,
        amount: amount * 1469 * 100,
        publicKey: "pk_test_30782caf9800834ab3d0df832eb5821fdc6d99b9"
    };
    const componentProps = {
        ...config,
        text: `payStack`,
        onSuccess: (reference) => { router.replace('/checkout/orders') },
        onClose: () => alert("close"),
    };
    const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_PUBLISHABLE_SECRET_KEY
    );

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
                            </div>

                        </div>
                        <div className=' bg-white p-5 shadow-lg rounded-lg mt-2' >

                            <div className=' flex justify-between py-3'>
                                <h1 className='text-red-500 font-bold'> shipping information</h1>
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
                            <h1 className='text-red-500 font-bold flex justify-between'>items in cart
                                <span className=' text-black mx-1'>total cost/price: ${cartitems.reduce((a, b) => a + b.price * b.quantity, 0).toFixed(2)}</span></h1>
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

                    <div className='w-full border-2 rounded-md md:w-[35%] p-5'>
                        <h1 >payment method</h1>
                        <div className=' w-full flex flex-col items-center bg-white shadow-lg px-2 py-11 rounded-lg mt-6 '>

                            {/* payment info and email input */}
                            <div className=' flex flex-col w-[80%] mb-4'>
                                select payment method:
                                <div className=' my-3'>
                                    <b>NB:</b><span>please all payment with nigeria
                                        naira(<span className=' line-through'>N</span>) should be made with paystack
                                        <p>other currencies can be paid with stripe payment</p> </span>
                                </div>
                                <div className=' w-full my-3'>
                                    <input type="checkbox" onChange={(e) => e.target.checked
                                        ? setcurrentemail(true)
                                        : setcurrentemail(false)} />

                                    <span>Continue payment with user currently logged in
                                        <span className=' font-bold text-purple-800'>
                                            NUELMAT</span>..
                                    </span>

                                </div>
                                {/* email input */}
                                <div className={` w-full   ${currentemail ? "hidden" : "flex flex-col"}`}>
                                    <label className=' w-full font-mono uppercase font-bold text-sm opacity-40'>email:</label>
                                    <input type='email' className=' outline-none border-2 p-2 mb-6 rounded-lg'
                                        onChange={(e) => setemail(e.target.value)} />
                                </div>
                            </div>


                            {/* payment using paystack */}
                            <PaystackButton
                                className=" bg-emerald-500   
                                active:bg-green-900 text-white p-3 w-[80%] rounded-lg shadow-lg"
                                {...componentProps} />



                            {/* payment using stripe */}
                            <button onClick={async () => {
                                const { sessionId } = await fetch("/api/stripecheckout", {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({ amount, cartitems, email: currentemail ? session?.user?.email : email }),
                                }).then((res) => res.json())

                                const stripe = await stripePromise;

                                if (!stripe || !sessionId) return;

                                await stripe.redirectToCheckout({ sessionId });
                            }}
                                className=" bg-blue-800 mt-3 flex
                                  gap-3 justify-center items-center
                                active:bg-blue-900 text-white
                                 p-3 w-[80%] rounded-lg shadow-lg" >
                                stripe
                                <FaCcStripe size={20} className=' m-0' />
                            </button>

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