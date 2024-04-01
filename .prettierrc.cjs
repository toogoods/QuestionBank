module.exports = {
  printWidth: 80,
  tabWidth: 2,
  rangeStart: 0,
  singleQuote: true,
  trailingComma: "all",
  proseWrap: "preserve",
  overrides: [{ "files": ".prettierrc", "options": { "parser": "json" } }],
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-packagejson"]
}
