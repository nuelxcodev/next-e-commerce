import React from 'react'
import Admin from '.'
import { BiCalendar } from 'react-icons/bi'

function sales() {
    const sales = [
        { item: 'cloth', totoalnumofitems: 50, numofsale: 30, remainingitems: 20 },
        { item: 'apple', totoalnumofitems: 50, numofsale: 30, remainingitems: 20 },
        { item: 'laptop', totoalnumofitems: 50, numofsale: 30, remainingitems: 20 },
        { item: 'bag', totoalnumofitems: 50, numofsale: 30, remainingitems: 20 },
        { item: 'shoe', totoalnumofitems: 50, numofsale: 30, remainingitems: 20 },
        { item: 'phone', totoalnumofitems: 50, numofsale: 30, remainingitems: 20 },
        { item: 'phone', totoalnumofitems: 50, numofsale: 30, remainingitems: 20 },
        { item: 'cloth', totoalnumofitems: 50, numofsale: 30, remainingitems: 20 },
        { item: 'apple', totoalnumofitems: 50, numofsale: 30, remainingitems: 20 },
        { item: 'laptop', totoalnumofitems: 50, numofsale: 30, remainingitems: 20 },
        { item: 'bag', totoalnumofitems: 50, numofsale: 30, remainingitems: 20 },
        { item: 'shoe', totoalnumofitems: 50, numofsale: 30, remainingitems: 20 },
        { item: 'phone', totoalnumofitems: 50, numofsale: 30, remainingitems: 20 },
        { item: 'phone', totoalnumofitems: 50, numofsale: 30, remainingitems: 20 },
        { item: 'cloth', totoalnumofitems: 50, numofsale: 30, remainingitems: 20 },
        { item: 'apple', totoalnumofitems: 50, numofsale: 30, remainingitems: 20 },
        { item: 'laptop', totoalnumofitems: 50, numofsale: 30, remainingitems: 20 },
        { item: 'bag', totoalnumofitems: 50, numofsale: 30, remainingitems: 20 },
        { item: 'shoe', totoalnumofitems: 50, numofsale: 30, remainingitems: 20 },
        { item: 'phone', totoalnumofitems: 50, numofsale: 30, remainingitems: 20 },
        { item: 'phone', totoalnumofitems: 50, numofsale: 30, remainingitems: 20 },

    ]

    return (
        <div>
            <Admin>
                <section className=' bg-white p-7 shadow-lg'>
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
                </section>
                <table className=''>
                    <thead >
                        <th>S/N</th>
                        <th>item</th>
                        <th>no of items</th>
                        <th>no of sales</th>
                        <th>remaining</th>
                    </thead>

                    <tbody>
                        {
                            sales.map((sale, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{sale.item}</td>
                                    <td>{sale.totoalnumofitems}</td>
                                    <td>{sale.numofsale}</td>
                                    <td>{sale.remainingitems}</td>
                                </tr>))
                        }
                    </tbody>
                </table>
            </Admin>
        </div>
    )
}

export default sales