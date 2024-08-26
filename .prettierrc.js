module.exports = {
  "plugins": ["@trivago/prettier-plugin-sort-imports"],
  "singleQuote": true,
  "tabWidth": 2,
  "semi": true,
  "importOrder": ["./index.css$", "^#/(.*)$", "^[./](?!.*\\.scss$).*$", "^./(.*)\.module\.scss$" ],
  "importOrderSeparation": false,
  "importOrderSortSpecifiers": true
}
