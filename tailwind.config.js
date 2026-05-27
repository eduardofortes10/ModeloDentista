/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0f2f4a',
        ocean: '#2e9ccf',
        aqua: '#43c6b7',
        mist: '#eff7fb',
        ink: '#183044',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 47, 74, 0.12)',
      },
    },
  },
  plugins: [],
};
