const { resolve } = require('path');

function keyValueMapper([key, value]) {
  if (value === 'false') return '';
  if (value === 'true') return key;

  return `${value}`;
}

function noEmptyString(value) {
  return value.trim().length > 0;
}

/**
 * 1. Test-runner awaits a test page to be fully loaded,
 * 2. then finds target `variant groups`. For example, button's
 *    variant groups could be `primary`, `secondary` and `tertiary`
 * 3. Inside variant group, test runner search for all
 *    `variants` – wrappers, that contains a unique variant of tested component
 * 4. The tested component element has all info about its props as dataset
 *    attributes
 * 5. that eventually will be mapped to human-readable string
 * 6. Test-runner iterates all states described in a config file,
 * 7. brings the tested component to a specific state,
 * 8. and makes a screenshot and saves it in temp folder.
 * 9. At the end of each iteration, the test-runner saves statistics
 *    for further operations with these screenshots
 */

async function makeScreenshots({ component, context, mapSelector, reporter, rootUrl }) {
  const {
    name,
    category,
    package: p,
    url,
    config: { selector, states },
  } = component;

  reporter('\ncurrent component', name);

  const page = await context.newPage();
  await page.goto(`${rootUrl}/${url}`);
  await page.waitForSelector(mapSelector); /** 1 */

  reporter(`iterating over ${name} variant groups...`);

  const variantGroups = await page.$$(`${mapSelector}__group`); /** 2 */

  const meta = []; /** 7 */

  for await (const variantGroup of variantGroups) {
    const stats = [];

    const { groupName } = await variantGroup.evaluate((node) => node.dataset);

    const variants = await variantGroup.$$(`${mapSelector}__variant`); /** 3 */

    reporter(
      `making screenshots for ${name}, group ${groupName}, ${
        variants.length * states.length
      } screenshots in total...`,
    );

    for await (const variant of variants) {
      const el = await variant.$(selector);

      const props = await variant.evaluate((node) => node.dataset); /** 4 */
      const mappedProps = Object.entries(props).map(keyValueMapper).filter(noEmptyString); /** 5 */

      const fullname = `${name}_${mappedProps.join('__')}`;

      /** 6 */
      for (const state of states) {
        const stateName = typeof state === 'string' ? state : state.name;
        const filename = `${fullname}~~${stateName}.png`;
        const path = `./screenshots/${name}/_temp/${filename}`;
        const variation = mappedProps.concat(stateName).join(' ');

        const inState = await bringToState({
          state,
          el,
          elWrapper: variant,
          page,
          reporter,
        }); /** 7 */

        await variant.screenshot({ path: resolve(__dirname, path) }); /** 8 */

        // clean before next iteration
        await page.mouse.up();
        await variant.focus();

        /** 9 */
        stats.push({
          path,
          variation,
          props,
          inState,
        });
      }
    }

    meta.push({
      component: name,
      group: groupName,
      stats,
    });
  }

  return { meta };
}

async function bringToState({ state, el, elWrapper, page, reporter }) {
  if (typeof state === 'string') {
    try {
      if (state === 'hover') {
        await el.hover();
      }

      if (state === 'active') {
        const box = await el.boundingBox();
        await page.mouse.down(box.x + box.width / 2, box.y + box.height / 2);
      }

      if (state === 'focus') {
        await el.focus();
      }
      return true;
    } catch (error) {
      reporter(error);
      return false;
    }
  }

  if (typeof state.actions === 'function') {
    try {
      await state.actions({ el, page, elWrapper });
      return true;
    } catch (error) {
      reporter(error);
      return false;
    }
  }
  return false;
}

module.exports = {
  makeScreenshots,
};
