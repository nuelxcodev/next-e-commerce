import { useRouter } from 'next/router'
import React from 'react'

function CheckoutProgress({ activeStep = 0 }) {
    const router = useRouter()
    return (
        <div className='flex justify-around w-[80%] md:w-[60%]'>
            {["signIn", "shipping", "payment", "orders"].map((step, index) => (
                <div key={step} className="flex flex-col w-[40%] first:w-7 " >
                    <div className={`my-5 mx-0 text-right ${index <= activeStep ? 'text-purple-800' : 'text-black'}`}>
                        <span className={`${index === activeStep ? " font-bold" : " text-[0px] md:text-base "}`}>{step}</span></div>


                    <div className={` relative  h-[6px] w-[100%]
                    ${index <= activeStep
                            ? 'bg-purple-800'
                            : ' bg-gray-400'}`}>
                        <span className='hidden md:block text-white p-1 rounded-full w-8 text-center absolute bg-inherit  -top-3 right-0  ' onClick={() => router.replace(`/checkout/${step}`)}>{index + 1}</span>

                    </div>
                </div >
            ))
            }
        </div>
    )
}

export default CheckoutProgress