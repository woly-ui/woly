/* eslint-disable import/no-extraneous-dependencies */
const playwright = require('playwright');
const fs = require('fs-extra');
const reporter = require('debug')('screenshoter');

const { getConfigs } = require('./get-configs');
const { makeScreenshots } = require('./make-screenshots');
const { makeSnapshots } = require('./make-snapshots');

const express = require('express');

/**
 * TODO: test in all major browsers
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

  reporter('booting playwright');
  const { browser } = await bootPlaywright();

  reporter('booting screenshot server');

  const { app, stopServer, port } = bootScreenshotServer();

  reporter("loading component's config");
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

    await makeSnapshots({ app, context, groupsMeta, mapSelector, port, reporter, wrapperSize });
  };

  await Promise.all(configsMeta.map(testComponent));

  reporter('closed screenshot server');

  stopServer.close();

  reporter('closed playwright');
  await browser.close();
};

function bootScreenshotServer() {
  const port = 3000;

  const http = require('http');
  const app = express();
  const server = http.createServer(app);

  app.set('view engine', 'pug');
  app.set('views', __dirname);
  app.use('/screenshots', express.static(`${__dirname}/screenshots`));

  server.on('error', (error) => {
    reporter('somehting went wrong with screenshot server');
    throw error;
  });

  const stopServer = server.listen(port, () => {
    reporter(`booted screenshot server at localhost:${port}`);
  });

  return { app, stopServer, port };
}

async function bootPlaywright() {
  const browser = await playwright.chromium.launch();

  return { browser };
}

async function main() {
  try {
    await startScreenshotTesting({
      rootUrl: 'http://localhost:8000',
      mapSelector: '.state-map',
    });
  } catch (error) {
    reporter(error);
    process.exit(1);
  }
}

main();
