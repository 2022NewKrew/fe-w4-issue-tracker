module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-env'],
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
