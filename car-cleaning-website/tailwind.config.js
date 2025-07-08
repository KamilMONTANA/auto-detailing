module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: 'rgba(255,255,255,0.15)',
        prestige: '#0a0a0a',
        accent: '#b6e0fe',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};