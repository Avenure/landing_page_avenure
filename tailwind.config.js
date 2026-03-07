/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        avenure: {
          primary: '#00E4FF',
          'primary-dim': 'rgba(0, 228, 255, 0.8)',
          dark: '#2A2F34',
          darker: '#1E2226',
          light: '#3A4047',
          segment: {
            cyan: '#00E4FF',
            teal: '#14B8A6',
            blue: '#38BDF8',
            indigo: '#818CF8',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.9', filter: 'brightness(1.2)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 228, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 228, 255, 0.4)',
      },
      dropShadow: {
        'glow': '0 0 20px rgba(0, 228, 255, 0.5)',
      },
    },
  },
  plugins: [],
}
