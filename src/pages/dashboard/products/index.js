import React from 'react'
import Admin from '..'
import data from '../../../../utils/Data'
import Image from 'next/image'
import { BiEdit } from 'react-icons/bi'
import { useRouter } from 'next/router'

function index() {
    const products = data.products
    const router = useRouter()


    return (
        <div>
            <Admin>
                {
                    products.map((product) => (
                        <div key={product.slug} className=' bg-white m-2 flex p-3'>
                            <Image src={product.image} alt={product.name} height={100} width={200} />
                            <div className='w-[50%] '>
                                <div className=' flex flex-col w-full'>
                                    <section className='w-full flex justify-between'>
                                        <span className=' m-0'><b>name: </b>{product.name}</span>
                                        <span><b>price: </b>${product.price}</span>
                                    </section>
                                    <span className=' m-0'><b>brand: </b>{product.brand}</span>
                                    <span className=' m-0'><b>category: </b>{product.category}</span>
                                </div>
                                <button
                                    onClick={() => router.replace(`/dashboard/products/${product.slug}`)}
                                    className='md:w-[40%] my-4 flex justify-center items-center p-3
                                    bg-purple-800 text-white rounded-lg shadow-lg active:bg-purple-900'>edit<BiEdit className='mx-0' /></button>
                            </div>
                        </div>
                    ))
                }
            </Admin>
        </div>
    )
}

export default index