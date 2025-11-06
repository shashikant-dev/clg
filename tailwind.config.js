/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#78e6bbff',
        'brand-red-dark': '#209e6eff',
        'brand-red-darker': '#12694cff',
        'brand-red-darkest': '#094e3fff',
        'brand-blue': '#00718A',
        'brand-blue-dark': '#0558E2',
        'brand-gray': {
          light: '#FBFBFB',
          DEFAULT: '#F0F0F0',
          medium: '#C7C7C7',
          dark: '#525252',
        },
        'brand-yellow': '#E0AE46',
        'brand-green': '#2B7747',
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        'tenor-sans': ['"Tenor Sans"', 'sans-serif'],
        lato: ['"Lato"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.11em',
      },
      keyframes: {
        spin360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-once': 'spin360 0.5s linear forwards',
      },
    },
  },
  plugins: [],
};
