'use client'
import Itemscard from '../../Components/Itemscard'
import data from '../../utils/Data'

import Nav from '../../Components/Nav'
import brandimage1 from "../../public/images/bg5.jpg"
import brandimage2 from "../../public/images/bg6.jpg"
import brandimage3 from "../../public/images/b2.jpg"
import Carousel from '../../Components/Carousel'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Footer from '../../Components/footer'




function Home() {
  const images = [brandimage1, brandimage2, brandimage3]
  const [isloading, setisloading] = useState(true)

  useEffect(() => {
    setInterval(setisloading(false), 4000)
  }, [])

  if (isloading) {
    return <div className='bg-gray-800 text-white
      text-7xl w-full h-screen flex
      justify-center items-center 
      font-bold'>NUELM</div>
  }
  return (

    <div >

      <Nav />
      <div className='pt-20 '>
        <Carousel>
          {
            images.map((image) => (
              <Image src={image} alt={image} key={image} />
            ))
          }
        </Carousel>
      </div>


      <main className='topReview'>
        {data.products.map((product) =>
          <Itemscard key={data.slug} product={product} />)}
      </main>
      <Footer />
    </div>
  )
}

export default Home;