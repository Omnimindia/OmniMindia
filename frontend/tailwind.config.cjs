/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'omni-orange': {
          DEFAULT: '#FF6A00',
          light: '#FFA733',
          dark: '#CC5500',
        },
        'omni-dark': {
          DEFAULT: '#000000',
          50: '#0A0A0A',
          100: '#141414',
          200: '#1E1E1E',
          300: '#282828',
          400: '#323232',
          500: '#3C3C3C',
        },
        'omni-gray': {
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#CCCCCC',
          300: '#999999',
          400: '#666666',
          500: '#333333',
          600: '#2A2A2A',
          700: '#1F1F1F',
          800: '#141414',
          900: '#0A0A0A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
