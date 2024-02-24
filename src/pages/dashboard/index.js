
import { useRouter } from 'next/router'
import React from 'react'

function Index() {
    const router = useRouter()
    return (
        <div>

            <div className=' flex '>
                <aside className='h-[100vh] m-0 bg-gray-700 w-[25%]'>

                </aside>
                <main className='w-[75%]'>
                    <header className='m-0 w-full bg-gray-700 p-4 '>
                        <input >home</input>
                        <input >home</input>
                        <input >home</input>
                        <input >home</input>

                        <div>
                            
                        </div>
                    </header>
                    <div className='m-0 shadow-lg w-full py-4 flex rounded-xl' >
                        <div className=' text-left flex flex-col rounded-xl bg-orange-400 text-white w-[30%] shadow-lg p-5' >
                            <span className=' m-0'><b>balance:</b> $ 3000</span>
                            <div className=' text-sm mt-2 ml-0'>
                                <span>total balance: $ 4599</span>
                                <p>total profit gained</p>
                            </div>

                        </div>
                    </div>
                    <section>

                    </section>

                </main>




            </div>
        </div>
    )
}

export default Index