'use strict';

const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const env = dotenv.config().parsed;
const mode = env.NODE_ENV || 'development';

console.log('env: ', env.NODE_ENV);
console.log('env process: ', process.env);
// reduce it to a object
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

const config = {
  mode,
  devtool: mode === 'development' ? 'inline-source-map' : false,
  // Supported file loaders
  module: {
    rules: [
      {
        test: /\.(tsx?)|(jsx?)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
    modules: ['src', 'node_modules'],
  },
  plugins: [
    new webpack.DefinePlugin(envKeys),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

const client = Object.assign({}, config, {
  name: 'client',
  target: 'web',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/public'),
  },
});

const server = Object.assign({}, config, {
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/server/index.tsx',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
});

module.exports = [client, server];
