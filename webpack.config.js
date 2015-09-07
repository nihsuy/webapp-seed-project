var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/scripts/app.js'
  },
  output: {
    path: 'build',
    publicPath: '',
    filename: 'scripts/[name].js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel-loader'
      },
      {
        test: /\.css$/,
//        loader: 'style!css'
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.scss$/,
//        loader: 'style!css!sass'
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file?context=src&name=[path][name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new ExtractTextPlugin('styles/[name].css')
  ],
  eslint: {
    configFile: '.eslintrc'
  }
};