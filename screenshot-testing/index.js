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
 */

const defaultPageOptions = {
  deviceScaleFactor: 2,
  viewport: { width: 800, height: 400 },
  defaultTimout: 3000,
};

const defaultScreenshotSize = {
  width: 250,
  height: 200,
};

const startScreenshotTesting = async ({ rootUrl, mapSelector }) => {
  await fs.remove(`${__dirname}/screenshots`);

  reporter('booting playwright...');
  const { browser } = await bootPlaywright();

  reporter("loading component's config...");
  const configsMeta = await getConfigs({
    browser,
    configsUrl: `${rootUrl}/screenshot-test-configs.json`,
    reporter,
  });

  if (!configsMeta || configsMeta.length === 0) {
    reporter('components not found');
    process.exit();
  }

  reporter('got configs for –', configsMeta.map(({ name }) => name).join(', '));

  reporter('iterating over configs...');

  const testComponent = async (configMeta) => {
    const context = await browser.newContext(defaultPageOptions);

    const {
      config: { screenshotSize },
    } = configMeta;

    const wrapperSize = {
      ...defaultScreenshotSize,
      ...screenshotSize,
    };

    const { groupsMeta } = await makeScreenshots({
      configMeta,
      wrapperSize,
      context,
      mapSelector,
      reporter,
      rootUrl,
    });

    if (!groupsMeta || groupsMeta.length === 0) {
      reporter(
        `zero screenshots were taken for ${configMeta.name || 'component'}, abort making snapshots`,
      );
      return;
    }

    await makeSnapshots({ context, groupsMeta, mapSelector, reporter, wrapperSize });
  };

  await Promise.all(configsMeta.map(testComponent));

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
