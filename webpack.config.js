'use strict';

const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/public/')
  },
  mode: 'development',
  watch: true,
  devtool: 'source-map',

  module: {
    rules: [{
      test: /.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          'presets': [
            [
              "@babel/preset-env",
              {
                "targets": {
                  "browsers": ['last 2 versions', "ie >= 11"]
                }
              }
            ]
          ],

        }
      }
    }]
  }
};