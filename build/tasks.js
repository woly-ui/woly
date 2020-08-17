const debug = require('debug')('woly:tasks');
const fs = require('fs-extra');
const execa = require('execa');

const packages = require('./packages');
const { writePackageJson, directory } = require('./library');

const copyLicense = (libraryName) =>
  massCopy('.', `dist/${libraryName}`, ['LICENSE']);

const generatePackageJson = (libraryName) => () => {
  debug('running generatePackageJson', libraryName);
  return writePackageJson(
    `packages/${libraryName}/package.json`,
    packages[libraryName],
  );
};

function massCopy(from, to, targets) {
  return () => {
    debug('running massCopy', targets, 'from', from, '->', to);
    const jobs = [];
    for (const target of targets) {
      jobs.push([directory(from, target), directory(to, target)]);
    }

    return Promise.all(jobs.map(([f, t]) => fs.copy(f, t)));
  };
}

/* eslint-disable no-console */
function publishScript(libraryName, npmPackage = libraryName) {
  const onCatch = (error) => {
    debug('failed publishScript', libraryName);
    console.error(error);
  };

  return async (config) => {
    const tag = config.next ? 'next' : 'latest';
    const dry = config.dryRun;

    debug('running publishScript', libraryName, { tag, dry });
    try {
      const { stdout, stderr } = await execa(
        'npm',
        ['publish', '--tag', tag, dry ? '--dry-run' : ''],
        {
          cwd: `${process.cwd()}/dist/${libraryName}`,
          env: process.env,
        },
      );
      console.log(stdout);
      console.error(stderr);
    } catch (error) {
      onCatch(error);
    }
  };
}

/* eslint-enable no-console */

module.exports = {
  copyLicense,
  generatePackageJson,
  massCopy,
  publishScript,
};
