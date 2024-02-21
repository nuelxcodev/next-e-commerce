"use client"
import React from 'react'


function Brand() {
    return (
        <section className='h-[60vh] pt-12 md:pt-0 lg:h-[90vh] w-[100%] relative '>
            <div className='branding'>
                <div className=' absolute right-3 px-7 lg:top-[40vh] md:top-[7vh]  w-[50%]'>
                    <h1 className='text-[2.5rem] lg:text-[5rem] text-white font-extrabold md:text-[4rem] sm:text-[3rem]'>buying made easy</h1>
                    <span className=' text-white font-bold '>Welcome to NUELmat, where buying is effortless!
                        With our intuitive interface, finding your favorite products is a breeze. Simply browse,
                        click, and purchase with confidence. Enjoy secure transactions and speedy delivery, making
                        online shopping a delight. Join us today and experience the convenience of NUELmat!</span>
                </div>
            </div>

        </section>
    )
}

export default Brand;