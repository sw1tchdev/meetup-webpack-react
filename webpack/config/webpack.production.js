const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const { utils, css, javascript } = require('../modules');

module.exports = () =>
  merge(
    webpackCommon(),
    {
      devtool: false,
      mode: 'production',
    },
    javascript.loadJS(),
    css.minimizeCSS(),
    utils.optimization(),
  );
