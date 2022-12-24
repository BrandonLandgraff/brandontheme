/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'bl-',
  content: [
    "./assets/*.liquid",
    "./layout/*.liquid",
    "./assets/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/**/*.liquid"
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'yellow': '#FFCB00',
      'darkblue': '#080827',
      'white': '#FFFFFF',
      'black': '#000000',
      'lightgray': '#E8E9EB',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}