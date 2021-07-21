const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const optimization = () => ({
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
});

const splitChunks = () => ({
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});

const progress = () => ({
  plugins: [new webpack.ProgressPlugin()],
});

const cleanDist = () => ({
  output: {
    clean: true,
  },
});

module.exports = {
  optimization,
  progress,
  cleanDist,
  splitChunks,
};
