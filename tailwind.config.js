/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      keyframes: {
        wiggle: {
      '0%, 100%': { transform: 'rotate(-5deg)' },
      '50%': { transform: 'rotate(5deg)' },
    },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
         'wiggle' : 'wiggle 1.5s ease-in-out infinite'
      },
      animationDelay: {
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
        '1200': '1200ms',
      },
      fontFamily: {
        bebas: ['var(--font-bebas)'],
        montserrat: ['var(--font-montserrat)'],
        inter: ['var(--font-inter)'],
        playfair: ['var(--font-playfair)'],
        outfit: ['var(--font-outfit)'],
      },
      colors: {
        brand: {
          cream: '#faf9f7',
          brown: '#8b6f47',
          dark: '#2d2d2d',
          tan: '#e8e3db',
        }
      }
    },
  },
  plugins: [
    function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            }
          },
        },
        {
          values: theme('animationDelay'),
        }
      )
    },
  ],
}