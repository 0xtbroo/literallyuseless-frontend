module.exports = {
  purge: [ "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ADD1A7',
        secondary: '#2E522E',
        highlight: '#92C989',
        neutral: '#5E5E5E',
        dark: '#383838',
        background: '#F9FFF8',
      },
      fontFamily: {
        primary: ['Comic Neue, sans-serif'],
        secondary: ['Coming Soon, serif'],
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
