/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				info: '#93E6FB',
				success: '#80CED1',
				warning: '#EFD8BD',
				error: '#E58B8B',
				almhof: {
					primary: '#6A404B',
					secondary: '#A6747F',
					text: '#494143',
					background: '#FFFBFB',
				},				
			},
			fontFamily: {
				cursive: [
					"Caveat, cursive",
				]
			},
			gridAutoColumns: {
				full: '100%'
			}
		},
	},
	plugins: [require('@tailwindcss/typography')]
};
