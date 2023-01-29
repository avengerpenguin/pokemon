const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');


module.exports = {
  entry: {
    main: './index.js'
  },
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html',
      chunks: ['main'],
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  }
};
