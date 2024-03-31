
import { useSession } from 'next-auth/react'
import Admin from '.'
import { BiSave } from 'react-icons/bi'

function Profile() {

    const { data: session } = useSession()


    return (
        <div>
            <Admin>
                <section className=' p-4'>
                    <section className=' w-full px-2 flex'>
                        <div className=' rounded-full overflow-hidden  border w-max mx-0 '>
                            <img src={session?.user.image} alt="profile" />
                        </div>
                        <div className=' mx-1 flex flex-col justify-end mb-4'>
                            <p><b>name: </b>{session?.user.name}</p>
                            <p> <b>email: </b>{session?.user.email}</p>
                        </div>
                    </section>

                    <div className=' flex flex-col justify-center'>
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

                        <section className='w-full md:w-[80%] flex gap-[5%] m-0'>
                            <button className='w-[40%] flex items-center justify-center p-2 bg-purple-800 text-white rounded-lg mt-7 '>save <BiSave className='m-0' /></button>
                            <button className='w-[40%] flex items-center justify-center p-2 bg-purple-800 text-white rounded-lg mt-7'>edit</button>
                        </section>
                    </div>
                </section>
            </Admin>
        </div>
    )
}

export default Profile