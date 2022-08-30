/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}'],
  theme: {
    extend: {
      screens: {
        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '700px' },
        // => @media (max-width: 700px) { ... }
        xsm: { max: '500px' },
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#4A3AFF',
        secondary: '#EFF0F7',
        red: '#dc2626',
        white: '#ffffff',
        purple: '#3f3cbb',
        midnight: '#121063',
        metal: '#565584',
        tahiti: '#3ab7bf',
        silver: '#ecebff',
        'bubble-gum': '#ff77e9',
        bermuda: '#78dcca',
      },
    },
  },
  important: true,
  plugins: [],
};
