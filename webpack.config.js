const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Cleandist = require('mingwiki-webpack-cleandist-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(pug)$/,
        use: { loader: 'pug-loader' }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Demo',
      template: path.resolve(__dirname, './src/index.pug')
    }),
    new Cleandist(),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist')
    },
    // compress: true,
  },
  devtool: 'source-map'
}