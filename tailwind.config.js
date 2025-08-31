/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        secondary: {
          50: '#fdf2f8',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be185d',
        },
        brand: {
          orange: '#f97316',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(135deg, #fef3f2 0%, #fdf2f8 50%, #fef7ed 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        'gradient-hero-light': 'linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 50%, #fce7f3 100%)',
        'gradient-hero-dark': 'linear-gradient(135deg, #312e81 0%, #7c3aed 50%, #be185d 100%)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #6366f1, 0 0 10px #6366f1, 0 0 15px #6366f1' },
          '100%': { boxShadow: '0 0 10px #6366f1, 0 0 20px #6366f1, 0 0 30px #6366f1' },
        }
      }
    },
  },
  plugins: [],
}