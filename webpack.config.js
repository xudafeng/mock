'use strict';

var path = require('path');

var config = {
  entry: {
    index: path.resolve('src')
  },
  output: {
    path: path.join(__dirname, 'assets'),
    filename: '[name].js'
  },
  externals: {
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};

module.exports = config;
