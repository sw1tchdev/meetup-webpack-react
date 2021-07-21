const CopyWebpackPlugin = require('copy-webpack-plugin');

const copyFiles = (patterns = []) => ({
  plugins: [
    new CopyWebpackPlugin({
      patterns,
    }),
  ],
});

module.exports = {
  copyFiles,
};
