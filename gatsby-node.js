const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        calendar: path.resolve(__dirname, './src/calendar/'),
        dev: path.resolve(__dirname, './src/dev/'),
        lib: path.resolve(__dirname, './src/lib/'),
        static: path.resolve(__dirname, './src/static/'),
        ui: path.resolve(__dirname, './src/woly/'),
        woly: path.resolve(__dirname, './src/woly/'),
      },
    },
  });
};
