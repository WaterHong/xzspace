require('@babel/register')({
  presets: [
      '@babel/preset-react',
      '@babel/preset-env'
  ],
  plugins: [
    ["@babel/transform-runtime"]
  ]
});
require('./app.js');