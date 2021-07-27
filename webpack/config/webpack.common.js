const { merge } = require('webpack-merge');
const path = require('path');
const { PROJECT_DIR } = require('../paths');
const { utils, javascript, html, css, assets } = require('../modules');

module.exports = () =>
  merge(
    {
      entry: path.resolve(PROJECT_DIR, 'src/index.tsx'),
      output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(PROJECT_DIR, 'dist'),
      },
      resolve: {
        extensions: ['.js', '.json', '.ts', '.jsx', '.tsx'],
        alias: {
          Components: path.resolve(PROJECT_DIR, 'src/components'),
        },
      },
      cache: {
        type: 'filesystem',
      },
    },
    javascript.typeChecking(),
    html.injectHtml(),
    css.loadSCSS(),
    assets.loadResources(),
    assets.loadInline(),
    utils.cleanDist(),
    utils.progress(),
    utils.splitChunks(),
  );
