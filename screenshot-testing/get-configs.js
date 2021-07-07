const path = require('path');

/**
 * 1. gastby-theme-woly plugin finds all screenshot-test configs and
 * generate a page (returns JSON with configs meta) on build stage.
 * Configs searcher heavly rely on file structure, so it should have
 * this format – <root>/<package_name>/<category>/<component_name>.
 * <root> is set in gatsby-config.js via plugin`s option `components`.
 * 2. Test pages url repeat same format mentioned above
 */

async function getConfigs({ browser, configsUrl, reporter }) {
  const excludedComponents = process.env.EXCLUDE
    ? process.env.EXCLUDE.split(',').map((component) => component.trim())
    : [];

  const includedComponents = process.env.INCLUDE
    ? process.env.INCLUDE.split(',').map((component) => component.trim())
    : [];

  const notDismissed = (name) =>
    (includedComponents.length > 0 && includedComponents.includes(name)) ||
    (excludedComponents.length > 0 && !excludedComponents.includes(name));

  const page = await browser.newPage();
  let response;

  try {
    const result = await page.goto(configsUrl); /** 1 */
    if (result) {
      response = result;
    }
  } catch (error) {
    reporter('could not fetch configs, url is broken\n', error);
  }

  const configs = [];

  for await (const { path: configPath, ...meta } of await response.json()) {
    try {
      const config = require(path.resolve(__dirname, '../src', configPath));

      if (config && notDismissed(meta.name)) {
        configs.push({
          config,
          /** 2 */
          url: `${meta.package}/${meta.category}/${meta.name}/__screenshot-test__`,
          ...meta,
        });
      }
    } catch (error) {
      reporter('could not get config file\n', error);
    }
  }

  await page.close();

  return configs;
}

module.exports = {
  getConfigs,
};
