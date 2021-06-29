/* eslint-disable import/no-extraneous-dependencies */
const playwright = require('playwright');
const fs = require('fs-extra');
const reporter = require('debug')('screenshot-testing');

const { getConfigs } = require('./get-configs');
const { makeScreenshots } = require('./make-screenshots');
const { makeSnapshots } = require('./make-snapshots');

const startScreenshotTesting = async ({ rootUrl, mapSelector, pageOptions }) => {
  await fs.remove(`${__dirname}/screenshots`); /** 0 */

  reporter('booting playwright...'); /** 1 */
  const { browser } = await bootPlaywright();

  reporter("loading component's config..."); /** 2 */
  const components = await getConfigs({
    browser,
    configsUrl: `${rootUrl}/screenshot-test-configs.json`,
    reporter,
  });

  if (!components || components.length === 0) {
    reporter('components not found');
    process.exit();
  }

  reporter('iterating over components to make screenshots...'); /** 3 */

  for await (const component of components) {
    const context = await browser.newContext(pageOptions);

    const { meta } = await makeScreenshots({
      component,
      context,
      mapSelector,
      reporter,
      rootUrl,
    });

    await makeSnapshots({ context, mapSelector, meta, reporter });
  }

  reporter('closed playwright');
  await browser.close();
};

async function bootPlaywright() {
  const browser = await playwright.chromium.launch();

  return { browser };
}

const main = async () => {
  try {
    await startScreenshotTesting({
      rootUrl: 'http://localhost:8000',
      mapSelector: '.state-map',
      pageOptions: {
        deviceScaleFactor: 2,
        viewport: { width: 800, height: 400 },
        defaultTimout: 200,
      },
    });
  } catch (error) {
    reporter(error);
    process.exit(1);
  }
};

main();
