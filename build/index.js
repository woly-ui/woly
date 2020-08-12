const {
  copyLicense,
  generatePackageJson,
  massCopy,
  publishScript,
} = require('./tasks');

const woly = [
  generatePackageJson('woly'),
  copyLicense('woly'),
  massCopy('.', 'dist/woly', ['README.md']),
  massCopy('packages/woly', 'dist/woly', ['package.json']),
  publishScript('woly'),
];

const calendar = [
  generatePackageJson('calendar'),
  copyLicense('calendar'),
  massCopy('packages/calendar', 'dist/calendar', ['README.md']),
  massCopy('packages/calendar', 'dist/calendar', ['package.json']),
  publishScript('calendar'),
];

main();

function main() {
  const config = {
    next: Boolean(process.env.NEXT),
    dryRun: Boolean(process.env.DRY_RUN),
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
  /* eslint-disable no-console */
  return tasks
    .reduce((p, task) => p.then(() => task(config)), Promise.resolve())
    .then(() => {
      console.log('DONE', name, 'task complete');
    })
    .catch((error) => {
      console.log('FAIL', name, 'task failed');
      console.error(error);
    });
  /* eslint-enable no-console */
}
