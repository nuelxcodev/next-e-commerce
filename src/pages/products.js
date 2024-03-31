'use client'
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import data from '../../utils/Data'
import Nav from '../../Components/Nav'
import { Pagination } from '../../Components/Pagination'



function Products() {
    const router = useRouter()
    const [productArray, setproductArray] = useState([])
    const [numb, setnum] = useState(0)

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
            <div>
                <Nav />
            </div>
            <section >

                <section className='w-full flex flex-col md:flex-row pt-20'>
                    {/* filteration section */}
                    <aside className=' w-full md:w-[20%] 
                    border-2 md:h-[80vh] gap-[10%] md:gap-0 flex flex-row
                     md:flex-col items-center justify-center
                      md:justify-start p-5'>
                        <h1>filter items by price</h1>

                        <select defaultValue="any" onChange={(e) => setnum(e.target.value === "any" ? 0 : e.target.value)}
                            className='mt-0 w-[30%] md:w-[95%] md:mt-5 bg-zinc-400 p-2 text-white outline-none  '>
                            {
                                ["any", 5, 10, 20, 50, 500, 1000].map(num => <option
                                    className=' bg-white text-black'
                                    key={num} >{num}</option>)
                            }
                        </select>

                        <p className=' hidden md:block md:mt-8 text-purple-800'
                        >{numb === 0 ? "showing all items" : `showing all items below $${numb}`}</p>

                    </aside>

                    {/* items display section */}
                    <div className='productdisplay'>
                        {
                            router.asPath === "/products" ? (
                                <div>
                                    <Pagination group={numb !== 0 ? data.products.filter(x => x.price < numb) : data.products} />
                                </div>)
                                : (<section >
                                    {router.query.search ? (
                                        <div>
                                            <Pagination group={numb !== 0 ? productArray.filter(x => x.price < numb) : productArray}
                                                category={router.query.search} price={numb} />
                                        </div>
                                    ) : (
                                        <div >
                                            <span className='ml-20 text-xl '>
                                                {router.query.category}:</span>
                                            <Pagination group={numb !== 0 ? filteritems.filter(x => x.price < numb) : filteritems}
                                                category={router.query.category} price={numb} />
                                        </div>)
                                    }
                                </section>)
                        }

                    </div>
                </section>


            </section>
        </div>
    )
}

export default Products