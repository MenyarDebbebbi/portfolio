/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				ssm: '357px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1440px',
			},
			boxShadow: {
				outer: '0px -100px 120px rgba(0, 0, 0, 0.75), 0px 100px 120px rgba(0, 0, 0, 0.75)',
				innerUp: 'inset 0px 50px 120px rgba(0, 0, 0, 0.75)',
			},
		},
	},
	plugins: [],
};
