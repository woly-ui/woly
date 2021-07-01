const path = require('path');

async function getConfigs({ browser, configsUrl, reporter }) {
  const excludedComponents = process.env.EXCLUDE
    ? process.env.EXCLUDE.split(',').map((component) => component.trim())
    : [];

  const page = await browser.newPage();
  const response = await page.goto(configsUrl);

  const configs = [];

  for await (const { path: configPath, ...meta } of await response.json()) {
    try {
      const config = require(path.resolve(__dirname, '../src', configPath));

      if (config && !excludedComponents.includes(meta.name)) {
        configs.push({
          config,
          url: `${meta.package}/${meta.category}/${meta.name}/__screenshot-test__`,
          ...meta,
        });
      }
    } catch (error) {
      reporter(error);
    }
  }

  await page.close();

  return configs;
}

module.exports = {
  getConfigs,
};
