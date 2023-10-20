/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import data from "../../../utils/data";
import React, { useContext } from "react";
import { Store } from "../../../utils/store";
import { BiLeftArrowCircle } from "react-icons/bi";
import Link from "next/link";







export default function ProductScreen() {
	// eslint-disable-next-line no-unused-vars
	const { state, dispatch } = useContext(Store);
	const router = useRouter()
	const { query } = useRouter();
	const { slug } = query;
	const product = data.products.find(x => x.slug === slug);
	if (!product) {
		return <div>product not available</div>;
	}

	const AddToCarthandleAdd = () => {
		const existItems = state.cart.cartitems.find(x => x.slug === product.slug);
		const quantity = existItems ? existItems.quantity + 1 : 1;

		if (product.countInStock < quantity) {
			const instock = document.getElementById("instock");
			instock.style.textDecoration = "line-through";
			instock.style.color = "red"

		}
		dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } })
		router.push("/cart")
	};

	return (
		<>
			<div className=" h-[70px] item-center">
				<Link href="./">
					<BiLeftArrowCircle size={40}></BiLeftArrowCircle>
				</Link>

			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-1">
				<img className="sm:h-full md:h-screen  lg:h-screen w-full" src={product.image} alt="item image" />
				<div className="p-0 m-0">
					<div className="grid grid-cols-3 gap-2">
						<img src={product.image} alt="1" />
						<img src={product.image} alt="2" />
						<img src={product.image} alt="3" />
					</div>
					<div className=" bg-slate-500 p-7 text-white mt-6 ">
						<h1>
							<b>name: </b>
							{product.name}
						</h1>
						<p>
							<b>desciption: </b>
							{product.description}
						</p>
						<p id="instock">
							<b>inStock: </b>
							{product.countInStock}
						</p>
						<p>
							<b>brand: </b>
							{product.category}
						</p>

						<div className="text-center text-black text-lg bg-slate-100 p-10 flex justify-around mt-40 sm:mb-5 md:mt-20 max-sm:block ">
							<h1 className="px-3">name: {product.name}</h1>
							<p className="px-3"> price: ${product.price}</p>
							<button
								className=" bg-yellow-300 px-5 py-2"
								onClick={AddToCarthandleAdd}>
								add to cart
							</button>
						</div>
					</div>
				</div>
			</div >
		</>
	);
}
