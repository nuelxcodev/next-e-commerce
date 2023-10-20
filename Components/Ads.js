/* eslint-disable @next/next/no-img-element */
import React from "react";
import Styles from "../src/styles/Home.module.css";



export default function Ads() {
	return (
		<div className={Styles.cover}>
			<main className=" w-[100vw]" >
				<div className=" text-5xl font-bold max-sm:text-2xl max-sm:pt-[78px]">
					<h1>buying and selling made easy</h1>

					<p className=" font-thin align-bottom max-sm:text-lg text-black">buy from Nuelzy.. and enjoy 30% discount in all purchase</p>
					<button className=" bg-red-600 px-5 m-5 py-3">get started</button>
				</div>
			</main>
		</div>
	);
}
