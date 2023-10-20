import { useState } from "react";
import Productitems from "../../Components/Productitems";
import data from "../../utils/data";
import Layout from "../../Components/Layout"






export default function items() {

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [searching, setsearching] = useState({
		id: 1,
		correct: [],
		wrong: ""
	})



	const search = data.products;

	function searchitem() {

		const itemToSearch =
			document.getElementById("input")
		let searcheditem = []

		for (let i = 0; i < search.length; i++) {
			if (search[i].name === itemToSearch.value) {
				searcheditem = [...searcheditem, search[i]]
			}
			setsearching({ correct: searcheditem })

		}

	}

	return (
		<>
			<Layout ></Layout>
			<div className="mt-2 mx-6  lg:mt-[4rem]">
				<input className=" border w-[80%] p-3 ml-3" id="input" />
				<button className="px-4 bg-red-600 py-3 text-white" onClick={searchitem}>search</button>
			</div>



			<div className=" w-[30vw]">
				{

					searching.correct.map((value) => (
						<div key={value.slug}>
							results:
							{document.getElementById("input").value}
							<Productitems product={value} ></Productitems>
						</div>

					))}
			</div>

			<div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 mr-8 overflow-hidden">
				{

					data.products.map(product => (
						<Productitems product={product} key={product.slug} ></Productitems>
					))}
			</div>
		</>
	);
}
