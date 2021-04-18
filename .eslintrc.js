module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    "quotes": [1, "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "no-unused-vars": 1,
    "@typescript-eslint/no-unused-vars": ["warn", { "vars": "all", "args": "after-used" }]
  }
};
