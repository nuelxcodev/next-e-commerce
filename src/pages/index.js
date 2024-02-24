
import Itemscard from '../../Components/Itemscard'
import data from '../../utils/Data'

import Nav from '../../Components/Nav'
import brandimage1 from "../../public/images/bg5.jpg"
import brandimage2 from "../../public/images/b6.jpg"
import brandimage3 from "../../public/images/b2.jpg"
import Carousel from '../../Components/Carousel'
import Image from 'next/image'








function Home() {
  const images = [brandimage1, brandimage2, brandimage3]

  return (

    <div >

      <Nav />
      <div className=' '>
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

    </div>
  )
}

export default Home