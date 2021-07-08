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
 * 2. then finds components `variant groups` element in page. For example,
 *    button's variants could be group by priority, e.g. `primary`, `secondary`, 'danger', etc.
 * 3. Variant group element contains containes `variants`– wrapper elements,
 *    that contains a unique variant of tested component
 * 4. The tested component element has all info about its props as dataset
 *    attributes
 * 5. that eventually will be mapped to human-readable string
 * 6. Test-runner iterates all states described in a config file,
 * 7. brings the tested component to a specific state,
 * 8. and makes a screenshot and saves it in temp folder.
 * 9. If complex state return a reset state function, it will be executed before
 *    moving to the next state;
 * 10. At the end of each iteration, the test-runner saves statistics
 *    for further operations with these screenshots
 */

async function makeScreenshots({
  configMeta,
  context,
  mapSelector,
  reporter,
  rootUrl,
  wrapperSize,
}) {
  const {
    name,
    url,
    config: { selector, states },
  } = configMeta;

  const page = await context.newPage();

  await page.goto(`${rootUrl}/${url}`, { timeout: 3000 });

  await page.waitForSelector(mapSelector, { timeout: 3000 }); /** 1 */

  await page.addStyleTag({
    content: `
      ${mapSelector}__variant {
        width: ${wrapperSize.width}px;
        height: ${wrapperSize.height}px;
      }
    `,
  });

  const variantGroups = await page.$$(`${mapSelector}__group`); /** 2 */

  const groupsMeta = []; /** 7 */

  for await (const variantGroup of variantGroups) {
    const stats = [];

    const { groupName } = await variantGroup.evaluate((node) => node.dataset);

    const variants = await variantGroup.$$(`${mapSelector}__variant`); /** 3 */

    reporter(`capturing ${name}-${groupName}, ${variants.length * states.length} in total`);

    const makeVariantScreenshot = async (variant) => {
      const el = await variant.$(selector);

      if (!el) {
        reporter(`Component el not found, check if ${name}'s selector is correct`);
        return;
      }

      const props = await variant.evaluate((node) => node.dataset); /** 4 */
      const mappedProps = Object.entries(props).map(keyValueMapper).filter(noEmptyString); /** 5 */

      const fullname = `${name}_${mappedProps.join('__')}`;

      /** 6 */
      for (const state of states) {
        const stateName = typeof state === 'string' ? state : state.name;
        const filename = `${fullname}~~${stateName}.png`;
        const path = `./screenshots/${name}/_temp/${filename}`;
        const variation = `[${stateName}] ${mappedProps.join(' ')}`;

        const makeScreenshot = async () => variant.screenshot({ path: resolve(__dirname, path) });
        const disabled = props.disabled && props.disabled === 'true';

        /** 7 */
        if (typeof state === 'string') {
          await bringToSimpleState({
            el,
            disabled,
            page,
            reporter,
            state,
          });
          await makeScreenshot(); /** 8 */
        } else {
          const resetState = await bringToComplexState({
            el,
            elWrapper: variant,
            disabled,
            page,
            reporter,
            state,
          });

          await makeScreenshot(); /** 8 */

          /** 9 */
          if (resetState && typeof resetState === 'function') {
            await resetState();
          }
        }

        // clean before next iteration
        await page.mouse.up();
        await variant.focus();

        /** 10 */
        stats.push({
          path,
          props,
          variation,
        });
      }
    };

    await Promise.all(variants.map(makeVariantScreenshot));

    if (stats.length > 0) {
      groupsMeta.push({
        groupName,
        stats,
        name,
        states: states.length,
      });
    } else {
      reporter(`Something went wrong, zero screenshots were taken for ${name}, group ${groupName}`);
    }
  }

  return { groupsMeta };
}

async function bringToComplexState({ el, elWrapper, disabled, page, reporter, state }) {
  try {
    return await state.actions({ el, page, disabled, elWrapper });
  } catch (error) {
    reporter(error);
  }
}

async function bringToSimpleState({ el, disabled, page, reporter, state }) {
  try {
    if (state === 'hover' && !disabled) {
      await el.hover({ force: true });
    }

    if (state === 'active') {
      const box = await el.boundingBox();
      await page.mouse.down(box.x + box.width / 2, box.y + box.height / 2);
    }

    if (state === 'focus') {
      await el.focus();
    }
  } catch (error) {
    reporter(error);
  }
}

module.exports = {
  makeScreenshots,
};
