'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js'
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ["@babel/preset-env", {
              targets: {
                edge: "17",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
                ie: "11"
              },
            }]
          ]
        }
      }
    }]
  }
};
