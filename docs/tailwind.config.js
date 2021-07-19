module.exports = {
  purge: [
    './**/*.html',
    './**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
/* NODE_ENV=production npx tailwindcss -i ./assets/css/tailwind.css -c ./tailwind.config.js -o ./assets/css/style.css */