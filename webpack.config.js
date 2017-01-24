const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const webpack = require("webpack");


let plugins = [
  new ExtractTextPlugin("[name].styles.css"),
];

const isProd = false;

module.exports = {
  context: __dirname + '/assets',
  entry: {
    entry : './index.js'
  },
  output: {
    path: path.resolve("/build/"),
    publicPath: "/build/",
    filename: "[name].bundle.js"
  },
  plugins: plugins,

  devServer: {
    contentBase: 'build/html'
  },

  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.css$|\.scss$/,
        exlude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", ["css-loader?sourceMap", "postcss-loader", "sass-loader"])
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exlude: /node_modules/
      },
      {
        test: /\.svg$/i,
        loader: "svg-url-loader"
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=25000'
      },
      {
        test: /.*\.(gif|jpe?g)$/i,
        loaders: [
          'file',
        ]
      },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
    ]
  }
};