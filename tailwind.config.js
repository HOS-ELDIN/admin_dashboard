/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/**/*.{js,ts,jsx,tsx,mdx}",
		"./public/data/*.{js,ts,jsx,tsx,mdx}",
	],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				exm: "#fff",
				"theme-button": "#99abb4",
			},
			backgroundColor: {
				"main-bg": "#FAFBFB",
				"main-dark-bg": "#20232A",
				"secondary-dark-bg": "#33373E",
				"light-gray": "#F7F7F7",
				"half-transparent": "rgba(0, 0, 0, 0.5)",
				"theme-bg": "#484B52",
			},
			fontSize: {
				14: "14px",
			},
			fontFamily: {
				open: ["var(--font-open)", "sans-serif"],
			},
			borderWidth: {
				1: "1px",
			},
			borderColor: {
				color: "rgba(0, 0, 0, 0.1)",
			},
			width: {
				400: "400px",
				760: "760px",
				780: "780px",
				800: "800px",
				1000: "1000px",
				1200: "1200px",
				1400: "1400px",
			},
			height: {
				80: "80px",
			},
			minHeight: {
				590: "590px",
			},
			backgroundImage: {
				"hero-pattern": "url('/data/welcome-bg.svg')",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
