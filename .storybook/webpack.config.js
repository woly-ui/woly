const path = require('path');

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '~/': path.join(__dirname, '/../src'),
  };

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
