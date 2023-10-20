import Ads from "../../Components/Ads";

import Productitems from "../../Components/Productitems";
import data from "../../utils/data";
import Styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../../Components/Layout"

export default function Home() {
	return (
		< >
		<Layout></Layout>
			<div>
				<Ads />
			</div>
			<h1>top review</h1>
			<hr></hr>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[95vw] max-sm:w-[90vw]">
				{data.products.map(product => (
					<Productitems product={product} key={product.slug}></Productitems>
				))}
			</div>
			<div className={Styles.seemore}>
				<Link href="/product">
					<h1>see more</h1>
				</Link>
			</div>
		</>
	);
}
