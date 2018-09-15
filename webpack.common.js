const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  JS: path.resolve(__dirname, 'src/js'),
  SRC: path.resolve(__dirname, 'src'),
};

// Webpack Configuration
module.exports = {
  entry: path.join(paths.SRC, 'index.jsx'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
  ],
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader' },

    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
