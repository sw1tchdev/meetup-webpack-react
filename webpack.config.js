function getWebpackConfigByEnv(env) {
  switch (env) {
    case 'development':
      return require('./webpack/config/webpack.development');
    case 'production':
      return require('./webpack/config/webpack.production');
    default:
      return require('./webpack/config/webpack.development');
  }
}

module.exports = getWebpackConfigByEnv(process.env.NODE_ENV);
