var path = require('path');
var webpack = require('webpack');
const {removeEmpty} = require(`webpack-config-utils`);

const publicPath = `/`;
const port = 3000;

const config = {
  entry: [
    'babel-polyfill',
    './src/index'
  ],

  resolve: {
    extensions: [
      `.js`,
      `.jsx`,
      `.css`
    ]
  },

  output: {
    path: path.join(__dirname, `lib`),
    filename: `wma.js`,
    library: 'WMA',
    libraryTarget: 'umd',
    publicPath
  },

  devtool: 'source-map',

  module: {

    rules: removeEmpty([

      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: `babel-loader`
          },
          {
            loader: `eslint-loader`,
            options: {
              fix: true
            }
          }
        ]
      }

    ])

  }

}

module.exports = config;
