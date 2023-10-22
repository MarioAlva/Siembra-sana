import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
		'black-white-gradient': 'linear-gradient(180deg, rgba(0,0,0,.6) 60%, rgba(255,255,255,1) 90%)',
		'transparent-white-gradient': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 30%)',
		'plant-image': 'url(./img/footerImage.jpg)',
		'logo' : 'url(./img/logo.png)',
		'healthyMe' : 'url(./img/healthyMe.png)',
		'greenBg' : 'url(./img/greenBg.jpg)',
		'green-bottom' : 'url(./img/bottomGreenShape.png)',
		'green-top' : 'url(./img/upperGreenShape.png)',
		'white-top' : 'url(./img/upperWhiteShape.png)',
      },
	  height: {
		  'first-landing-section': "calc(100vh - 240px)",
	  },
	  maxHeight: {
		'first-section': 'calc(100vh - 150px)',
	  },
	  fontFamily: {
		'bebasNeue': ['"Bebas Neue"', 'sans-serif'],
	  },
    },
  },
  plugins: [],
}
export default config
