/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFC107',
          light: '#FFD54F',
          dark: '#FFB300',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          lighter: '#333333',
          darker: '#0D0D0D',
        },
        light: {
          DEFAULT: '#FFFFFF',
          dark: '#CCCCCC',
        },
        accent: {
          DEFAULT: '#3A1078',
        }
      },
      fontFamily: {
        heading: ['Vazirmatn', 'Poppins', 'sans-serif'],
        body: ['Vazirmatn', 'Inter', 'sans-serif'],
        vazirmatn: ['Vazirmatn', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};