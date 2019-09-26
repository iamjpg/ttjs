const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {
  VueLoaderPlugin
} = require('vue-loader');
const {
  HotModuleReplacementPlugin
} = require('webpack');

module.exports = {
  entry: {
    platypus: './src/platypus.js',
    app: './src/app.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'none',
  module: {
    rules: [{
        test: /.js$/,
        // exclude: /node_modules/,
        include: [
          /node_modules(?:\/|\\)lit-element|lit-html/
        ],
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      showErrors: true,
      cache: false,
      title: 'Platypus Vue Proof of Concept',
      favicon: path.resolve(__dirname, 'dist/favicon.ico'),
      template: path.resolve(__dirname, 'dist/index.html')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  },
};
