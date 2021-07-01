const utils = require('@percy/sdk-utils');
const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname);
app.use('/screenshots', express.static(`${__dirname}/screenshots`));

const port = 3000;

async function makeSnapshots({ component, context, mapSelector, meta, reporter }) {
  const screenshotServer = app.listen(port, () => {
    reporter(`booted screenshot server at http://localhost:${port}`);
  });

  const {
    config: {
      screenshotElStyle = {
        width: 400,
        height: 200,
      },
    },
  } = component;

  for await (const { name, groupName, stats } of meta) {
    const page = await context.newPage();

    const variantGroup = `${name}-${groupName}`;

    app.get(`/${variantGroup}`, (_req, res) => {
      res.render('screenshot-page-template', {
        stats,
        screenshotElStyle,
      });
    });

    await page.goto(`http://localhost:${port}/${variantGroup}`);

    if (process.env.PERCY_TOKEN) {
      await sendPercy({ page, name: variantGroup });
    }

    await page.waitForSelector(mapSelector);

    reporter(`making debug screenshot for ${name}, group ${groupName}`);

    const stateMap = await page.$(mapSelector);
    await stateMap.screenshot({
      path: `${__dirname}/screenshots/${name}/${groupName}.png`,
    });
    await page.close();
  }

  reporter('closed screenshot server');

  screenshotServer.close();
}

async function sendPercy({ page, name }) {
  const versions = require('../versions.json');

  await page.evaluate(await utils.fetchPercyDOM());
  // eslint-disable-next-line no-loop-func
  const domSnapshot = await page.evaluate(() => PercyDOM.serialize());

  await utils.postSnapshot({
    // required
    name,
    url: page.url(),
    domSnapshot,
    // optional
    environmentInfo: 'localhost/playwright' /** meta info */,
    clientInfo: `woly/${versions.woly}` /** meta info */,
    widths: [1024],
    minHeight: 1024,
  });
}

module.exports = { makeSnapshots };
