import React from 'react'

import Admin from '..';
import { useRouter } from 'next/router';
import data from '../../../../utils/Data';
import Image from 'next/image';
import { BiPlus, BiSave } from 'react-icons/bi';

function Product() {
    const router = useRouter()
    const { query } = router
    const { product } = query

    const products = data.products.find(prdt => prdt.slug === product)
    console.log(router)


    return (
        <div>
            <Admin>
                <section className=' bg-white flex flex-col lg:flex-row p-5'>
                    <div className='w-[40%] relative border flex justify-center items-center'>
                        <div>
                            <Image src={products?.image} alt={products?.name} height={100} width={200} />
                        </div>
                        <BiPlus size={30} className=' absolute right-0 top-[80%] bg-zinc-500 text-white rounded-full m-1' />
                    </div>
                    <div className='productADDEDit '>

                        <span>name:
                            <input defaultValue={products?.name} />
                        </span>

                        <span>brand:
                            <input defaultValue={products?.brand} />
                        </span>

                        <span>category:
                            <input defaultValue={products?.category} />
                        </span>

                        <span className='items-start'>description:
                            <input defaultValue={products?.description} />
                        </span>

                        <div className='flex w-full '>
                            <span>price:
                                <input defaultValue={products?.price} />
                            </span>

                            <span>countInStock:
                                <input defaultValue={products?.countInStock} />
                            </span>
                        </div>
                        <button className='md:w-[40%] my-4 flex justify-center items-center p-3
                         bg-purple-800 text-white rounded-lg shadow-lg active:bg-purple-900 '>
                            save <BiSave className='mx-0' size={20} />
                        </button>
                    </div>
                </section>

                <section className=' bg-white p-7 shadow-lg mt-11'>
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
                </section>
            </Admin>
        </div>
    )
}

export default Product;