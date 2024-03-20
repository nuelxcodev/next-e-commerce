import { BarChart, PieChart } from '@mui/x-charts'
import React from 'react'
import Admin from '.'


function chart() {

    return (
        <Admin>
            <section className=' flex flex-col md:flex-row items-center mt-5'>
                <BarChart
                    xAxis={[{ scaleType: 'band', data: ['instock', 'sales', 'profit'] }]}
                    series={[{ data: [4, 2, 6] }, { data: [1, 6, 3] }, { data: [2, 3, 6] }]}
                    width={700}
                    height={500}
                />

                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: 15, label: 'markek' },
                                { id: 1, value: 15, label: 'instock' },
                                { id: 2, value: 20, label: 'sales' },
                            ],
                        },
                    ]}
                    width={500}
                    height={300}
                />
            </section>

            <section className=' bg-white p-7 shadow-lg mt-3'>
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
        </Admin>
    )
}

export default chart