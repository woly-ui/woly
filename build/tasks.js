const fs = require('fs-extra');
const execa = require('execa');

const packages = require('./packages');
const { writePackageJson, directory } = require('./library');

const copyLicense = (libraryName) =>
  massCopy('.', `dist/${libraryName}`, ['LICENSE']);

const generatePackageJson = (libraryName) => () =>
  writePackageJson(
    `packages/${libraryName}/package.json`,
    packages[libraryName],
  );

function massCopy(from, to, targets) {
  return () => {
    const jobs = [];
    for (const target of targets) {
      jobs.push([directory(from, target), directory(to, target)]);
    }

    return Promise.all(jobs.map(([f, t]) => fs.copy(f, t)));
  };
}

/* eslint-disable no-console */

const onCatch = (error) => {
  console.error(error);
};
function publishScript(libraryName) {
  return async (config) => {
    const tag = config.next ? 'next' : 'latest';
    try {
      const { stdout, stderr } = await execa('npm', ['publish', '--tag', tag], {
        cwd: `${process.cwd()}/dist/${libraryName}`,
        env: process.env,
      });
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
