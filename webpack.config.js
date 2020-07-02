'use strict';

const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

module.exports = () => {
  const env = dotenv.config().parsed;
  const mode = env.NODE_ENV || 'development';

  // reduce it to a object
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    mode,
    devtool: mode === 'development' ? 'inline-source-map' : false,
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    // Supported file loaders
    module: {
      rules: [
        {
          test: /\.(tsx?)|(jsx?)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'jsx', '*'],
    },
    plugins: [new webpack.DefinePlugin(envKeys)],
    devServer: {
      publicPath: '/dist/',
      contentBase: path.resolve(__dirname, '.'),
      watchContentBase: true,
      compress: true,
    },
  };
};
