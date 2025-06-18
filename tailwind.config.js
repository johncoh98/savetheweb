/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F4EF',
        text: '#1C1C1C',
        primary: {
          DEFAULT: '#2E2D2B',
          light: '#403F3D',
          dark: '#1A1918',
        },
        secondary: {
          DEFAULT: '#D7B8A0',
          light: '#E5CCBA',
          dark: '#C6AA83',
        },
        accent: {
          DEFAULT: '#C6AA83',
          light: '#D4BEA0',
          dark: '#B89666',
        },
        rose: {
          DEFAULT: '#F4D0D0',
          light: '#FBE4E4',
          dark: '#E5B8B8',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F0EDE8',
        },
        'text-light': '#666666',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' },
        },
        shimmer: {
          '0%': { 'background-position': '-100% 0' },
          '100%': { 'background-position': '100% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}