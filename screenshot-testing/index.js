/* eslint-disable import/no-extraneous-dependencies */
const playwright = require('playwright');
const fs = require('fs-extra');
const reporter = require('debug')('screenshot-testing');

const { getConfigs } = require('./get-configs');
const { makeScreenshots } = require('./make-screenshots');
const { makeSnapshots } = require('./make-snapshots');

/**
 * TODO: test in all major browsers
 * TODO: reduce testing time
 * TODO: make it work with production build
 */

const defaultPageOptions = {
  deviceScaleFactor: 2,
  viewport: { width: 800, height: 400 },
  defaultTimout: 300,
};

const startScreenshotTesting = async ({ rootUrl, mapSelector }) => {
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
    const context = await browser.newContext(defaultPageOptions);

    const { meta } = await makeScreenshots({
      component,
      context,
      mapSelector,
      reporter,
      rootUrl,
    });

    await makeSnapshots({ component, context, mapSelector, meta, reporter });
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
    });
  } catch (error) {
    reporter(error);
    process.exit(1);
  }
};

main();
