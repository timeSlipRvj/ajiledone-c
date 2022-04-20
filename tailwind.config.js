module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: withOpacityValue('--color-primary'),
			},
		},
	},
	plugins: [],
}

function withOpacityValue(variable) {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(var(${variable}))`
		}
		return `rgb(var(${variable}) / ${opacityValue})`
	}
}
