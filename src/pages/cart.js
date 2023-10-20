import React, { useContext } from "react";
import { Store } from "../../utils/store";
import Link from "next/link";
import Image from "next/image";
import { BiTrash } from "react-icons/bi"
import Style from "../styles/Home.module.css"
import Layout from "../../Components/Layout"


export default function Cartdisplay() {
    // eslint-disable-next-line no-unused-vars
    const { state, dispatch } = useContext(Store);
    const {
        cart: { cartitems } } = state

    const removeitem = (item) => {
        dispatch({ type: 'CART_REMOVE_ITEM', payload: item })
    }
    const updatecart = (item, qty) => {
        let num = Number(qty)
        const existItems = state.cart.cartitems.find(x => x.slug === item.slug);
        const quantity = existItems ? existItems.quantity = (num) : existItems.quantity
        dispatch({ type: 'CART_ADD_ITEM', payload: item, quantity })
    }
    return (
        <>
            <Layout></Layout>
            {
                cartitems.length === 0 ?
                    (<div className=" text-center">
                        <BiTrash size={300} className={Style.icon}></BiTrash>
                        <h2 className=" text-xl text-bold pt-5">cart is empty</h2>
                        <Link href="/product" >
                            <p className=" text-blue-600">go shopping
                            </p></Link>
                    </div>) : (
                        <div>
                            <div className=" block w-[90vw] justify-between p-6">
                                {cartitems.map((item) => (
                                    <div key={item.slug}>
                                        <div className="flex justify-between items-center shadow-md rounded-xl w-[95vw] my-3 border p-3">
                                            <Link href={`/product/${item.slug}`}>
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    width={40}
                                                    height={40}
                                                ></Image>
                                            </Link>


                                            <p><b>name:</b> {item.name}</p>
                                            <p><b>quantity:</b>

                                                <select onChange={(e) => updatecart(item, e.target.value)}>

                                                    {[...Array(item.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))}
                                                </select></p>
                                            <p><b>price: </b>${item.price}</p>
                                            <div className=" item-center m-2">
                                                <button onClick={() => removeitem(item)}><BiTrash></BiTrash></button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                            <div className=" m-6 shadow-md border p-7 lg:w-[40vw] text-center lg:mx-[30vw]" >
                                <p>total number of items : <b>{cartitems.reduce((a, c) => a + c.quantity, 0)}</b></p>
                                <p>total price: <b>${cartitems.reduce((a, c) => a + c.quantity * c.price, 0)}</b></p>
                                <button className=" bg-yellow-300 p-2 mt-4" onClick={() => {

                                }}> procced to puchase</button>
                            </div>
                        </div>

                    )}



        </>
    )
}
