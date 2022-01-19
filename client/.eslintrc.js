module.exports = {
  root: true,
  env: {
    // 브라우저의 document와 같은 객체 사용 여부
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ["prettier"],
  extends: ["@kakao/styleguide/comment", "@kakao/styleguide/typescript"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 7,
    sourceType: "module",
  },
  // ESLint가 무시할 디렉토리, 파일을 설정
  ignorePatterns: ["node_modules/"],
  rules: {
    // prettier에 맞게 룰을 설정
    "prettier/prettier": "error",
    // naming 에 대한 convention
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: "default", format: null },
      { selector: "interface", format: ["PascalCase"] },
      { selector: "typeAlias", format: ["PascalCase"] },
      { selector: "typeParameter", format: ["PascalCase"] },
    ],
  },
};
