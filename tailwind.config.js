module.exports = {
  purge: {
    enabled: ['production', 'uat', 'cat'].includes(process.env.NODE_ENV),
    content: [
      './src/**/*.{html,ts}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
