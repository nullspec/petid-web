const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const webpackConfig = merge(baseWebpackConfig, {
  devtool: '#inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/test.env'),
    }),
  ],
});

// no need for app entry during tests
delete webpackConfig.entry;

module.exports = webpackConfig;
