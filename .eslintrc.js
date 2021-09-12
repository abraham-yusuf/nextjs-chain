module.exports = {
  env: {
    browser: false,
    es2021: true,
    mocha: true,
    node: true,
  },
  extends: [
    "standard",
    "plugin:prettier/recommended",
    "plugin:node/recommended",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  overrides: [
    {
      files: ["hardhat.config.js"],
      globals: { task: true },
    },
    {
      files: ["scripts/**"],
      rules: { "no-process-exit": "off" },
    },
    {
      files: ["hardhat.config.js", "scripts/**", "test/**"],
      rules: { "node/no-unpublished-require": "off" },
    },
  ],
};


// {
//   "extends": [
//     "next",
//     "prettier"
//   ],
//   "plugins": [
//     "prettier"
//   ],
//   "rules": {
//     "prettier/prettier": [
//       "error",
//       {
//         "printWidth": 80,
//         "singleQuote": false,
//         "trailingComma": "es5",
//         "semi": false,
//         "tabWidth": 2
//       }
//     ]
//   }
// }
