module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "> 1%, not dead",
        useBuiltIns: "usage",
        corejs: { version: 3, proposals: true },
      },
    ],
    "@babel/preset-react",
  ],
  plugins: [],
};
