module.exports = {
  presets: [
    ['@babel/preset-env',{'modules':'cjs'}],
    '@babel/preset-react'
  ],
  plugins: [
    'babel-plugin-styled-components',
    ['@babel/plugin-transform-runtime',{'corejs':3}]
  ]
};
