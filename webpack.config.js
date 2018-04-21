const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),   
    new CopyWebpackPlugin([
      { from: './src/index.html', to: "index.html" }
    ]),
    // new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  // output: {
  //   filename: 'app.js',
  //   path: path.resolve(__dirname, 'dist'),
  //   publicPath: '/'
  // }
};