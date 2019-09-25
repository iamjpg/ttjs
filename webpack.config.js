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
        include: [
          /node_modules(?:\/|\\)lit-element|lit-html/
        ],
        loader: "babel-loader"
      },
    ]
  },
  plugins: [

  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true
  },
};
