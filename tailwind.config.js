module.exports = {
  purge: [ "./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ADD1A7',
        secondary: '#3B6F33',
        highlight: '#92C989',
        neutral: '#5E5E5E',
        dark: '#383838',
        background: '#F9FFF8',
      },
      fontFamily: {
        primary: ['Comic Neue, sans-serif'],
        secondary: [''],
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
