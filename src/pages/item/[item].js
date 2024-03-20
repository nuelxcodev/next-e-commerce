/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import Nav from "../../../Components/Nav"
import React, { useContext } from 'react'
import data from '../../../utils/Data'
import { Cartcontext } from '../../../utils/Cartcontext'
import Itemscard from '../../../Components/Itemscard'
import Link from 'next/link'

function Item() {
    const { state, dispatch } = useContext(Cartcontext)
    const { cartitems } = state
    const router = useRouter()
    const { query } = useRouter()
    const { item } = query

    const product = data.products.find(product => product.slug === item)
    const existing = product ? cartitems.find((item) => item.slug === product.slug) : null;
    const quantity = existing ? existing.quantity + 1 : 1


    const filteritems = []
    const category = []

    for (let index = 0; index < data.products.length; index++) {
        const element = data.products[index];
        category.push(element)
    }
    category.find((productcategory, index) => {
        const group = category.filter((group) => group === productcategory)
        if (category.indexOf(productcategory) === index) {
            if (group[0].category === product?.category || group[0].brand === product?.brand) {
                filteritems.push(group[0]);

            }
        }
        console.log('g')
    })




    if (product) {
        return (
            <div className=' overflow-hidden'>
                <Nav />
                <section className='flex flex-col  lg:flex-row pt-16 lg:pt-7 '>
                    <div className='lg:mx-11 w-full md:w-2/5 max-h-[80vh] overflow-scroll image-product' >
                        <img src={product.image} alt={product.name} className='w-full ' />
                    </div>

                    <div className=' w-[100%] lg:w-3/5 flex flex-col items-center px-3' >


                        <section className=' w-full text-left  '>

                            <header className=' text-2xl font-bold'>
                                <p>{product.name}</p>
                            </header>
                            <span className=''>{product.brand}</span>
                        </section>



                        <section className='text-left w-full '>
                            <span>
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
                            </span>

                            <p>
                                rating: {product.rating}
                            </p>
                            <p>
                                description:   <b>{product.description}</b>
                            </p>
                        </section>


                        <section>
                            <input type="button"
                                value={`add to cart    ($${product.price})`}
                                className=' bg-purple-800 text-white p-5 rounded-lg my-6 md:w-[25vw] active:bg-purple-900 transition-all '
                                onClick={() => { dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity } }) }} />
                        </section>
                    </div>

                </section>

                <section className='pt-16 '>
                    <p className='ml-16'>related items</p>
                    <div className='items-related'>
                        {filteritems.map(product => (<Itemscard product={product} key={product.name} />))}
                        <Link href={`/products`} className=' flex items-end m-0 text-purple-800 underline'> see more</Link>
                    </div>
                </section>
            </div>
        )
    }
    else { return <div> item unavailable</div> }

}

export default Item