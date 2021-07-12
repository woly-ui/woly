const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        lib: path.resolve(__dirname, './src/lib/'),
        static: path.resolve(__dirname, './src/static/'),
        ui: path.resolve(__dirname, './src/woly/'),
      },
    },
  });
};
