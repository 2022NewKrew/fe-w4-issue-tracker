module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-env', '@babel/typescript'],
  plugins: [
    [
      '@emotion',
      {
        sourceMap: true,
        autoLabel: 'dev-only',
        labelFormat: '[dirname]-[filename]-[local]',
        cssPropOptimization: true,
      },
    ],
  ],
};
