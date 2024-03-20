/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import CheckoutProgress from '../../../Components/CheckoutProgress'
import { Cartcontext } from '../../../utils/Cartcontext'
import { useRouter } from 'next/router'

function Location() {
    const router = useRouter()

    const { state, dispatch } = useContext(Cartcontext)
    const [isCompleted, setisCompleted] = useState(false)
    const [enabled, setenabled] = useState(true)
    const [information, setinformation] = useState({
        country: "", states: "", city: "", address1: "", address2: "", phone: "", isCompleted: false,
    })

    const [country, setCountry] = useState('')
    const [states, setstates] = useState('')
    const [city, setcity] = useState('')
    const [address1, setaddress1] = useState('')
    const [address2, setaddress2] = useState('')
    const [phone, setphone] = useState('')



    useEffect(() => {
        if (country.length > 0 && states.length > 0
            && city.length > 0 && address1.length > 0
            && address2.length > 0 && phone.length > 0) {

            setisCompleted(true)
            setenabled(false)
            setinformation({
                country: country,
                states: states,
                city: city,
                address1: address1,
                address2: address2,
                phone: phone,
                isCompleted: isCompleted
            })
        }
        else {
            setisCompleted(false);
            setenabled(true)
        }
    }, [country, phone, address1, address2, city, states, isCompleted])




    if (state.shipping.isCompleted) { router.replace('/checkout/payment') }
    else {
        return (
            <div>
                <CheckoutProgress activeStep={1} />
                <div className='w-[70%]'>

                    <div className=' mt-16'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates maiores quasi voluptate
                        praesentium
                        omnis eveniet beatae quam autem vel modi, unde exercitationem nemo tempora harum dolor
                        recusandae
                        nam
                        ipsum ea?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates maiores quasi voluptate
                        praesentium
                        omnis eveniet beatae quam autem vel modi, unde exercitationem nemo tempora harum dolor
                        recusandae
                        nam
                        ipsum ea?
                    </div>

                    <div className=' my-4 md:max-w-full'>
                        <form className='flex flex-col checkout-form p-4' onSubmit={(e) => {
                            e.preventDefault();
                            dispatch({ type: 'ADD_SHIPPING', payload: information })
                            router.replace('/checkout/payment')
                        }} >
                            <label>country:</label>
                            <input type='text' onChange={(e) => setCountry(e.target.value)} />

                            <label>state:</label>
                            <input type='text' onChange={(e) => setstates(e.target.value)} />

                            <label>city</label>
                            <input type='text' onChange={(e) => setcity(e.target.value)} />

                            <label>address1:</label>
                            <input type='text' onChange={(e) => setaddress1(e.target.value)} />

                            <label>address2 (optional) :</label>
                            <input type='text' onChange={(e) => setaddress2(e.target.value)} />

                            <label>phone:</label>
                            <input type='text' onChange={(e) => setphone(e.target.value)} />

                            <div className=' flex justify-between w-full mt-9 '>
                                <input type="button" onClick={() => router.push('/')} value="back" className=' bg-blue-800 text-white p-3 rounded-md' />
                                <input type="submit" disabled={enabled} value="Continue" className={` text-white p-3 rounded-md ${isCompleted ? " bg-blue-800" : "bg-gray-500"}`} />
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        )
    }
}

export default Location