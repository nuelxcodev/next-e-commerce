/** @type {import('tailwindcss').Config} */
module.exports = {
	/** @type {import('tailwindcss').Config} */
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],

	theme: {

		extend: {
			colors: {
				"secondary-color": "var(--secondary-color)",
				"cartbg-color": "var(--cart_bg)",
				"text-color": "var(--color)",
			}
		},
	},
	plugins: [],
};
