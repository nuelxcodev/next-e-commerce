import { useEffect, useState } from "react";
import { CartProvider } from "../../utils/Cartcontext";
import "../styles/globals.css";
import Head from "next/head";
import { AuthProvider } from "../../utils/Providers";
import 'react-toastify/dist/ReactToastify.css';







export default function MyApp({ Component, pageprops, title }) {


	const [isclient, setisclient] = useState(false)

	useEffect(() => {
		setisclient(true)
	}, [])

	if (!isclient) return null
	return (

		<>
			<Head>
				<title>{title ? title + " -NULMAT " : "NULMAT"}</title>
				<meta name="desciption" content="my next application" />
				<meta name="viewport" content="width=device-width, initial-scale = 1" />

			</Head>

			
				<AuthProvider>
					<CartProvider >
						<Component {...pageprops} />
					</CartProvider>
				</AuthProvider>
			




		</>


	);
}

