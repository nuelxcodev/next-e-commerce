/* eslint-disable no-unused-vars */
import Head from "next/head";
import Link from "next/link";
import React, { useContext } from "react";
import Styles from "../src/styles/Home.module.css";
import { BiHome, BiCartAdd, BiUserCircle, BiMessageAltDetail, BiSearchAlt } from "react-icons/bi"
import { Store } from "../utils/store";



export default function Layout({ Children }) {
	
	const { state, dispatch } = useContext(Store)
	const { cart } = state

	return (
		<>

			<div>
				<header className="fixed w-full">
					<nav>
						<div className=" bg-slate-700 py-6 px-2 text-white items-center justify-between flex">
							<h1 className=" ">
								NULMAT
							</h1>
							<a href="#" className={Styles.menu} onClick={() => {
								const nav = document.getElementById("nav")
								nav.className = "max-sm:visible max-s:block max-sm:absolute max-sm:top-[55px] max-sm:left-[80%] max-sm:w-max-content max-sm:p-3 max-sm:bg-gray-400 max-sm:bg-opacity-80"
								nav.addEventListener("click", () => {
									nav.className = "max-sm:invisible flex justify-around"
								})
							}}></a>
							<div className="flex justify-around relative max-sm:invisible max-sm:fixed"
								id="nav">
								<Link href="product" className="mx-9 ">
									<BiSearchAlt size={30} />
								</Link>
								<Link href="/" className="mx-9">
									<BiHome size={30} />
								</Link>
								<Link href="cart" className=" grid" >
									<BiCartAdd size={30} />
									{cart.cartitems.length >= 0 && (
										<span className=" bg-red-700 rounded-full p-1 absolute text-[8px]  right-[49%] max-sm:sticky w-5">
											{cart.cartitems.reduce((a, c) => a + c.quantity, 0)}
										</span>
									)}

								</Link>
								<Link href="signIn" className="mx-11">
									<BiUserCircle size={30} />
								</Link>
								<Link href="/" className="mx-11">
									<BiMessageAltDetail size={30} ></BiMessageAltDetail>
								</Link>
							</div>
						</div>
					</nav>
				</header>
				<main className=" lg:pt-[5.1%] pt-[8%] " >{Children}</main>
				<footer></footer>
			</div>
		</>
	);
}
