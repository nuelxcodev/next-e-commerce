"use client"
import React, { useEffect, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function Carousel({ children: slides }) {

    const [current, setcurent] = useState(0)

    const prev = () => setcurent(current => current === 0 ? slides.length - 1 : current - 1)
    const next = () => setcurent(current => current === slides.length - 1 ? 0 : current + 1)

    useEffect(() => {
        setInterval(next, 8000)
    }, [])
    return (
        <div className=' overflow-hidden relative lg:h-[100vh] w-[100vw]'>
            <div className=' flex  item-center transition-transform ease-out duration-700'
                style={{ transform: `translateX(-${current * 100}%)` }} >
                {slides}
            </div>

            <div className=' absolute inset-0 flex items-center justify-between p-6'>

                <button onClick={prev} className=' bg-white opacity-50 p-3 rounded-full' >
                    <AiOutlineLeft />
                </button>

                <button className=' bg-white opacity-50 p-3 rounded-full' onClick={next} >
                    <AiOutlineRight />
                </button>
            </div>

            <div className='  absolute bottom-5 left-0 right-0'>
                <div className='flex w-max gap-2'>
                    {
                        slides.map((slide, index) => (
                            <div className={`bg-white w-[2vw] rounded-sm transition-all
                            ${current === index ? "bg-opacity-80 h-[6px]  " : "bg-opacity-40 h-[3px]"}`} key={slide} />
                        ))
                    }


                </div>

            </div>

            
        </div>


    )
}

export default Carousel;