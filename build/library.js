const { resolve } = require('path');
const fs = require('fs-extra');

async function writePackageJson(path, config) {
  let fullPath;
  if (path.endsWith('package.json')) fullPath = directory(path);
  else fullPath = directory(path, 'package.json');
  await fs.outputJSON(fullPath, config, { spaces: 2 });
}

const root = process.cwd();

function directory(...paths) {
  return resolve(root, ...paths);
}

module.exports = {
  writePackageJson,
  directory,
};
