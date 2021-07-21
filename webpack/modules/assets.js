const loadResources = () => ({
  module: {
    rules: [
      {
        test: /\.(ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
});

const loadInline = () => ({
  module: {
    rules: [
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/inline',
      },
    ],
  },
});

module.exports = {
  loadResources,
  loadInline,
};
