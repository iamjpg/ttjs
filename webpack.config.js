const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'platypus.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
    ]
  },
  plugins: [

  ]
};
