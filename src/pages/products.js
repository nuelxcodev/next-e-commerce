/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import data from '../../utils/Data'
import Itemscard from '../../Components/Itemscard'
import Nav from '../../Components/Nav'


function Products() {
    const router = useRouter()

    const [productArray, setproductArray] = useState([])
    useEffect(() => {
        if (router.query.search) {
            const products = data.products.map((product) => { return product })
            const searchedarray = [...new Set(products)]

            const searchvalue = router.query.search.toLowerCase()
            const result = searchedarray.filter((result) => {
                return (result.category + result.name + result.brand)
                    .toLocaleLowerCase()
                    .includes(searchvalue)
            })
            setproductArray(result)
        }

    }, [router.query])

    if (router.asPath === "/products") {
        return (
            <div>
                <Nav />
                <div className='pt-16 lg:pt-0 overflow-x-hidden gap-4 container grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4'>{
                data.products.map((product) => (<Itemscard product={product} key={product.slug} />))
            }
            </div>
            </div>
            
        )
    }


    // category display
    const filteritems = []
    const category = []

    for (let index = 0; index < data.products.length; index++) {
        const element = data.products[index];
        category.push(element)
    }
    category.find((productcategory, index) => {

        const group = category.filter((group) => group === productcategory)

        if (category.indexOf(productcategory) === index) {
            if (group[0].category === router.query.category) {
                filteritems.push(group[0]);
            }
        }
    })





    return (
        <div >
            <Nav/>
            <section className='pt-16 lg:pt-0'>

                <section>
                    <div>

                        <section >
                            {router.query.search ? (
                                <div>
                                    {productArray.length === 0 ? (<div className='m-52 text-4xl text-center'> no item found!</div>) : (
                                        <div className=' w-[70%] overflow-x-hidden gap-4 pt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                                            {productArray.map((product) => (<Itemscard product={product} key={product.slug} />))}
                                        </div>)}
                                </div>
                            ) : (
                                <div >
                                    <span className='ml-20 text-xl '> {router.query.category}:</span>
                                    <div className=' flex pt-2 overflow-x-hidden justify-center category-display'>
                                        {filteritems.map((product) => (<Itemscard product={product} key={product.slug} />
                                        ))
                                        }
                                    </div>
                                </div>)
                            }
                        </section>
                    </div>
                    <br></br>

                    <section>
                        <span className='ml-20 text-xl '> </span>
                    </section>
                </section>


            </section>
        </div>
    )
}

export default Products