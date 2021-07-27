const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const loadJS = (addReactHMR = false) => ({
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          babelrc: false, // configFile: false,
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          plugins: [
            [
              '@babel/plugin-transform-runtime',
              {
                helpers: true,
              },
            ],
            ...(addReactHMR ? ['react-refresh/babel'] : []),
          ],
        },
      },
    ],
  },
});

const typeChecking = () => ({
  plugins: [new ForkTsCheckerWebpackPlugin()],
});

const enableReactHMR = (options) => ({
  plugins: [
    new ReactRefreshWebpackPlugin({
      ...options,
    }),
  ],
});

module.exports = {
  enableReactHMR,
  loadJS,
  typeChecking,
};
