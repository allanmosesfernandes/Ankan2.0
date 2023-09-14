/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#ff5757",
			},
			fontFamily: {
				gothic: ["gothic", "sans-serif"],
			},
		},
	},
	plugins: [],
};
