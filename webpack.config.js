const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './client/index',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: /node_modules|packages/,
        test: /\.js$/,
        loader: 'eslint-loader',
      },
      {
        exclude: /node_modules|packages/,
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new FlowBabelWebpackPlugin(),
  ],
};
