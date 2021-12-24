module.exports = {
  purge: [ "./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'sewageGreen': '#00602E',
        'grimeGreen': '#007739',
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
