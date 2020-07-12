const { colors } = require('tailwindcss/defaultTheme');
// variant defaults
// https://tailwindcss.com/docs/configuring-variants/#default-variants-reference
module.exports = {
	theme: {
		extend: {
			spacing: {
				'9': '2.25rem',
				'11': '2.75rem',
				'14': '3.5rem',
				'18': '4.5rem'
			},
			fontSize: {
				'xxs': '0.625rem'
			},
			stroke: {
				...colors
			}
		},
		container: {
			center: true
		}
	},
	variants: {
		borderColor: ['responsive', 'hover', 'focus', 'first', 'last'],
		borderRadius: ['responsive', 'first', 'last'],
		borderWidth: ['responsive', 'first', 'last'],
		margin: ['responsive', 'before', 'first', 'last'],
		textColor: ['responsive', 'hover', 'focus', 'before']
	},
	plugins: [
		function({ addVariant, e }) {
			addVariant('before', ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					return `.${e(`before${separator}${className}`)}:before`;
				});
			});
		}
	]
};