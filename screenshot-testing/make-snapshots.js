const utils = require('@percy/sdk-utils');
const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname);
app.use('/screenshots', express.static(`${__dirname}/screenshots`));

const port = 3000;

async function makeSnapshots({ context, groupsMeta, mapSelector, reporter, wrapperSize }) {
  const screenshotServer = app.listen(port, () => {
    reporter(`booted screenshot server at http://localhost:${port}`);
  });

  for await (const { name, groupName, stats, states } of groupsMeta) {
    const page = await context.newPage();

    const variantGroup = `${name}-${groupName}`;

    app.get(`/${variantGroup}`, (_req, res) => {
      res.render('screenshot-page-template', {
        stats,
        wrapperSize,
      });
    });

    await page.goto(`http://localhost:${port}/${variantGroup}`);

    await page.waitForSelector(mapSelector);

    if (process.env.PERCY_TOKEN) {
      await sendPercy({ name: variantGroup, page, width: states * wrapperSize.width });
    } else {
      reporter(`making debug screenshot for ${name}, group ${groupName}`);

      const stateMap = await page.$(mapSelector);
      await stateMap.screenshot({
        path: `${__dirname}/screenshots/${name}/${groupName}.png`,
      });
      await page.close();
    }
  }

  reporter('closed screenshot server');

  screenshotServer.close();
}

async function sendPercy({ name, page, width }) {
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
    widths: [width],
    minHeight: 1024,
  });
}

module.exports = { makeSnapshots };
