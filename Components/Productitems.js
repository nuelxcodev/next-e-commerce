/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { Store } from "../utils/store";



export default function Productitems({ product }) {
	const { state, dispatch } = useContext(Store)



	const AddToCart = () => {
		const existItems = state.cart.cartitems.find(x => x.slug === product.slug);
		const quantity = existItems ? existItems.quantity + 1 : 1;

		if (product.countInStock < quantity) {
			alert("item is unavailable now. Please try again")

		}
		dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } })
	};
	return (
		<>
			<div className=" p-4 w-full m-5 lg:mx-9 max-sm:p-1 ">
				<div className=" bg-gray-200 p-2 max-sm:p-0 h-full">
					<Link href={`/product/${product.slug}`}>
						<img className=" h-[22vw] w-[100%] max-sm:h-[35vw]" src={product.image} alt={product.name} />
					</Link>
					<div className="mt-6 justify-center p-2">
						<div>
							<p><b>name:</b>{product.name} </p>
							<p><b>price: </b>${product.price}</p>
							<p><b>description:</b>{product.description}</p>
						</div>
						<div>
							<button className=" bg-yellow-300 p-2" onClick={AddToCart}>
								buy now
							</button>
						</div>
					</div>
				</div>
			</div >
		</>
	);
}
