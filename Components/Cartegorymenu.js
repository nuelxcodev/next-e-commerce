"use client"
import React, { useEffect, useState } from 'react'
import data from '../utils/Data'
import Link from 'next/link'


function Cartegorymenu({ open }) {
    const [dwn, setdwn] = useState()

    useEffect(() => {
        if (open === true) { setdwn(true) }
        else { setdwn(false) }
    }, [open])


    const product = data.products
    const categorylist = []
    const category = []


    for (let index = 0; index < product.length; index++) {
        const element = product[index];
        category.push(element.category)
    }
    category.filter((items, index) => {
        const totalitems = category.filter((item) => item === items);
        if (category.indexOf(items) === index) {
            categorylist.push({ category: items, totalitemsincategory: totalitems.length })
        }
    })


    return (
        <div className={`border absolute
        bg-gray-200  
        top-[53vh] 
        md:top-[25vh] 
        md:left-0  
        lg:border-none 
        lg:top-[4.2rem] p-8 
        lg:left-[30%] md:bg-white 
        h-max w-full md:w-[50%] 
        md:rounded-xl overflow-hidden  shadow-lg 
        ${dwn === true ? 'block' : 'hidden'} `}>
            {
                categorylist.map((list) => (
                    <div key={list.slug} onClick={() => setdwn(false)}>
                        <Link href={{ pathname: '/products', query: { category: list.category } }}
                        >
                            <div className=' active:bg-gray-400 active:text-white flex p-3 cursor-pointer'>
                                <span className=' w-[70%] m-0'>{list.category}</span>
                                <span className=' '>({list.totalitemsincategory}) items available</span>
                            </div>

                        </Link>
                    </div>
                ))

            }
        </div>
    )
}

export default Cartegorymenu