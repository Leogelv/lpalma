/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['5.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '8xl': ['6.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      colors: {
        'primary': {
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
        },
        'secondary': {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(168,85,247,0.4)',
        'glow-lg': '0 0 50px rgba(168,85,247,0.3)',
        'sharp': '5px 5px 0px rgba(255,255,255,0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-pattern': 'url("/mesh-pattern.png")',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
}

