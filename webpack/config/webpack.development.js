const { merge } = require('webpack-merge');
const path = require('path');
const webpackCommon = require('./webpack.common');
const { PROJECT_DIR } = require('../paths');
const { javascript } = require('../modules');

module.exports = (env) =>
  merge(
    webpackCommon(),
    {
      devtool: 'source-map',
      mode: 'development',
      devServer: {
        host: '0.0.0.0',
        port: 9009,
        static: {
          directory: path.join(PROJECT_DIR, 'dist'),
          publicPath: '/',
        },
        allowedHosts: 'all',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
        https: true,
        hot: true,
        liveReload: true,
        historyApiFallback: true,
        client: true,
      },
    },
    javascript.loadJS(!env.build),
    env.build
      ? {}
      : javascript.enableReactHMR({
          overlay: {
            sockIntegration: 'wds',
            sockHost: 'localhost',
            sockPath: 'ws',
            sockPort: 9000,
            sockProtocol: 'wss',
          },
        }),
  );
