
import Itemscard from '../../Components/Itemscard'
import data from '../../utils/Data'
import Brand from '../../Components/Brand'
import Nav from '../../Components/Nav'




function Home() {
 
 
  return (

    <div >

      <Nav />
      <Brand />
      <main className='topReview'>
        {data.products.map((product) =>
          <Itemscard key={data.slug} product={product} />)}
      </main>

    </div>
  )
}

export default Home