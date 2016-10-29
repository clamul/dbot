var webpack = require("webpack");
var path = require("path");
 
var DEV = path.resolve(__dirname, "src");
var OUTPUT = path.resolve(__dirname, "bin");

module.exports = {
  entry: DEV + '/main.js',
  target: 'node',
  output: {
    path: OUTPUT,
    filename: 'backend.js'
  },
  module: {
    loaders: [
      {
        include: DEV,
        test: /.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
        { test: /\.json$/, loader: 'json' },
    ]
  },
}
