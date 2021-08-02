const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        dev: path.resolve(__dirname, './src/dev/'),
        lib: path.resolve(__dirname, './src/lib/'),
        static: path.resolve(__dirname, './src/static/'),
        ui: path.resolve(__dirname, './src/woly/'),
      },
    },
  });
};
