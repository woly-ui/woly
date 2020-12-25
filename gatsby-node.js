const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'box-styles': path.resolve(__dirname, './src/lib/box-styles'),
        icons: path.resolve(__dirname, './src/static/icons/'),
        ui: path.resolve(__dirname, './src/ui/'),
      },
    },
  });
};
