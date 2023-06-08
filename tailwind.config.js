/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.svelte"
	],
	future: {
		purgeLayersByDefault: true,
		removeDeprecatedGapUtilities: true,
	  },
	theme: {
		extend: {
			fontFamily: {
				'default': ['Sneaky-Times'],
				'secondary': ['Mattone-150'],
				'pixel': ['VT323'],
			},
			colors: {
				oioBlue: '#4870FF',
				oioRed: '#FF857B',
				oioYellow: '#FFDD83',
				oioGreen: '#51FFBC',
				oioCyan: '#77E7FF',
				oioPurple: '#9F86FF',
				oioPink: '#FFB5CD',
				oioGray: '#B7B7B7'
			},
			fontSize: {
				'2xs': ['0.65rem', { lineHeight: '.75rem' }]
			},
			screens: {
				xsm: '500px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px'
			},
			rotate : {
				'20' : '20deg',
			},
			keyframes : {
				wobble : {
					'0%' :  { transform: 'rotate(0deg)' },
					'25%' : { transform: 'rotate(3deg)' },
					'50%' : { transform: 'rotate(0deg)' },
					'75%' : { transform: 'rotate(-3deg)' },
				   '100%' : { transform: 'rotate(0deg)' }
				}, 
				fadein : {
					'0%' :  { opacity: '0' },
					'100%' : { opacity: '1' }
				}, 
				fadeout : {
					'0%' :  { opacity: '1' },
					'100%' : { opacity: '0' }
				}
			}, 
			animation : {
				wobble : 'wobble .2s', 
				fadein : 'fadein .5s',
				fadeout : 'fadeout .5s'
			}
		}
	},
	plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}

