const utils = require('@percy/sdk-utils');

async function makeSnapshots({
  app,
  context,
  groupsMeta,
  mapSelector,
  port,
  reporter,
  wrapperSize,
}) {
  const makeGroupSnapshot = async ({ name, groupName, stats, states }) => {
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
      const stateMap = await page.$(mapSelector);
      await stateMap.screenshot({
        path: `${__dirname}/screenshots/${name}/${groupName}.png`,
      });
      await page.close();
    }
  };

  await Promise.all(groupsMeta.map(makeGroupSnapshot));
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
