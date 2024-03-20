import Link from 'next/link'
import CheckoutProgress from '../../../Components/CheckoutProgress'

function Order() {



    const purchased = [
        { price: 3000, totalitems: 20, date: Date(), isCompleted: true, processing: false },
        { price: 1500, totalitems: 8, date: Date(), isCompleted: false, processing: true },
        { price: 200, totalitems: 3, date: Date(), isCompleted: false, processing: false },
        { price: 5700, totalitems: 50, date: Date(), isCompleted: false, processing: true },
    ]



    return (
        <div>
            <CheckoutProgress activeStep={3} />
            <section className=' border mt-8 flex flex-col-reverse md:flex-row md:w-[90%] p-8 gap-[5%] h-[80vh]  '>
                <aside className='itemPurchesed'>
                    {
                        purchased.map(purchase => (
                            <div key={purchase} className={`p-3 rounded-md shadow-md mb-6 ${purchase.processing ? "bg-green-50 border-l-4 border-l-green-500" : (purchase.isCompleted ? " bg-white " : "bg-red-100  border-l-4 border-l-red-500")}`}>
                                <h1 className=' font-bold'>item purchase</h1>
                                <div className='mt-6'>
                                    <h2>total items bought: {purchase.totalitems}</h2>
                                    <h2>total price spent: <b>${purchase.price}</b></h2>

                                    <div className={`mt-5 `}>
                                        <span>status:</span> <b className={` ${purchase.processing ? "text-green-600" : (purchase.isCompleted ? " text-base" : "text-red-600")}`}>
                                            {
                                                ` ${purchase.processing ? "processing" : (purchase.isCompleted ? "completed" : "failed")}`
                                            }</b>
                                    </div>
                                    <div className=' mt-7 text-sm'>{purchase.date}</div>
                                </div>
                            </div>
                        ))
                    }


                </aside>

                <aside className='textNB'>
                    <div className=' mt-8 w-full text-left'>
                        <ul className='orderNav'>
                            <li>track items</li>
                            <li><Link href="/products">continue shopping</Link></li>
                            <li><Link href="/">home</Link></li>
                        </ul>
                    </div>

                    <div>
                        <b>NB:</b> <span>please note that every items purchased will be delivered within 2weeks. any
                            item not delivered within 2weeks, should be reported.<p className=' mt-2'></p> visit <a href='#'
                                className=' underline text-blue-600 visited:text-purple-500'>http://www.reportisues.com</a> to report issues
                        </span>
                    </div>


                    <div className=' flex flex-col'>
                        <h1 className=' font-bold mt-11'>terms and conditions</h1>
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

                        <button className=' p-2 bg-purple-800 text-white rounded-lg mt-7'>Accept</button>
                    </div>


                </aside>
            </section>
        </div>
    )
}

export default Order