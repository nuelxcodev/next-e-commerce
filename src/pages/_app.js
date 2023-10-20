
import { StoreProvider } from "../../utils/store";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageprops, title }) {
	return (
		<>

			<Head>
				<title>{title ? title + " -NULMAT " : "NULMAT"}</title>
				<meta name="desciption" content="my next application" />
				<meta name="viewport" content="width=device-width initial-scale = 0.8" />
			</Head>
			<StoreProvider>
				<Component {...pageprops} />
			</StoreProvider>
		</>


	);
}
export default MyApp;
