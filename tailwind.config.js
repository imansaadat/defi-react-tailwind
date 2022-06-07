module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        Kanit : 'Kanit'
      },
      colors:{
        primaryBlue : '#00d8ff',
        primaryPurple: '#6a00ff',
      },
      boxShadow: {
        'developer': '0 0 12px #00d8ff',
      }
    },
  },
  plugins: [],
}
