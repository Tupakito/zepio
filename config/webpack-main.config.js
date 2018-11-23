const HtmlWebPackPlugin = require('html-webpack-plugin'); // eslint-disable-line
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // eslint-disable-line
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    index: './app/index.js',
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({ sourceMap: true }),
    ],
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'postcss-loader',
          ident: 'postcss',
          options: {
            plugins: () => [autoprefixer({
              browsers: ['> 1%', 'not ie 11'],
            })],
          },
        }, {
          loader: 'sass-loader',
        }],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts/',
          },
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};