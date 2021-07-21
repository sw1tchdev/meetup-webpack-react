const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const { utils, css } = require('../modules');

module.exports = () =>
  merge(
    webpackCommon(),
    {
      devtool: false,
      mode: 'production',
    },
    css.minimizeCSS(),
    utils.optimization(),
  );
