/* eslint-disable unicorn/no-nested-ternary */
const {
  copyLicense,
  generatePackageJson,
  massCopy,
  // publishScript,
} = require('./tasks');
const { buildWoly, buildCalendar } = require('./builder');

const woly = [
  generatePackageJson('woly'),
  copyLicense('woly'),
  massCopy('.', 'dist/woly', ['README.md']),
  massCopy('packages/woly', 'dist/woly', ['package.json']),
  buildWoly,
  // publishScript('woly'), // TODO: fix to correctly publish
];

const calendar = [
  generatePackageJson('calendar'),
  copyLicense('calendar'),
  massCopy('packages/calendar', 'dist/calendar', ['README.md']),
  massCopy('packages/calendar', 'dist/calendar', ['package.json']),
  buildCalendar,
  // publishScript('calendar', '@woly/calendar'),
];

main();

function main() {
  const config = {
    next: Boolean(process.env.NEXT),
    dryRun: Boolean(process.env.DRY_RUN),
    packages: process.env.PACKAGE
      ? [process.env.PACKAGE.trim()]
      : process.env.PACKAGES
      ? process.env.PACKAGES.split(',').map((p) => p.trim())
      : undefined,
  };

  /* eslint-disable no-console */
  console.info('running tasks with config');
  console.dir(config);

  Promise.all([
    run({ tasks: woly, name: 'woly', config }),
    run({ tasks: calendar, name: 'calendar', config }),
  ]);
}

function run({ tasks, name, config }) {
  if (config.packages && !config.packages.includes(name)) {
    return;
  }

  /* eslint-disable no-console */
  return tasks
    .reduce((p, task) => p.then(() => task(config)), Promise.resolve())
    .then(() => {
      console.log('DONE', name, 'task complete');
    })
    .catch((error) => {
      console.log('FAIL', name, 'task failed');
      throw error;
    });
  /* eslint-enable no-console */
}
