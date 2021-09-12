// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "postcss-flexbugs-fixes",
    "postcss-nesting",
    "postcss-custom-properties",
    "autoprefixer",
  ],
}
