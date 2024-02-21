import React from 'react'

function CheckoutProgress({ activeStep = 0 }) {
    return (
        <div className='flex justify-around w-[60%]'>
            {["signIn", "location", "shipping", "payment", "order"].map((step, index) => (
                <div key={step} className="flex flex-col w-[25%] last:w-[0%]" >
                    <span className={`my-5 mx-0 ${index <= activeStep ? 'text-purple-800' : 'text-black'}`}>{step}</span>


                    <div className={` relative h-[7px] w-full
                    ${index <= activeStep
                            ? 'bg-purple-800'
                            : ' bg-gray-400'}`}>
                        <span className='text-white p-1 rounded-full w-8 text-center absolute bg-inherit  -top-3 '>{index + 1}</span>

                    </div>
                </div >
            ))
            }
        </div>
    )
}

export default CheckoutProgress