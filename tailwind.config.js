/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#091413',
        pine: '#285A48',
        mint: '#408A71',
        foam: '#B0E4CC',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        title: ['Space Grotesk', 'Sora', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(176,228,204,0.11) 1px, transparent 1px), linear-gradient(90deg, rgba(176,228,204,0.11) 1px, transparent 1px)',
      },
      backgroundSize: {
        36: '36px 36px',
      },
    },
  },
  plugins: [],
}

