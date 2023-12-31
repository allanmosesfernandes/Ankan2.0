/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
		"./src/templates/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#ff5757",
				secondary: "#333333",
				tertiary: "#e95166",
				gray: "#d6d6d6",
			},
			fontFamily: {
				gothic: ["gothic", "sans-serif"],
				seasons: ["seasons", "sans-serif"],
			},
			animation: {
				"spin-slow": "spin 20s linear infinite",
			},
		},
	},
	plugins: [],
};
