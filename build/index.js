const { copyLicense, generatePackageJson, massCopy } = require('./tasks');

const woly = [
  generatePackageJson('woly'),
  copyLicense('woly'),
  massCopy('.', 'dist/woly', ['README.md']),
  massCopy('packages/woly', 'dist/woly', ['package.json']),
];

const calendar = [
  generatePackageJson('calendar'),
  copyLicense('calendar'),
  massCopy('packages/calendar', 'dist/calendar', ['README.md']),
  massCopy('packages/calendar', 'dist/calendar', ['package.json']),
];

module.exports = { woly, calendar };
