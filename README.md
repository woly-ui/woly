# 🐣 Woly UI development kit

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://woly-ui.github.io/woly/) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) ![NPM Package CI](https://github.com/woly-ui/woly/workflows/NPM%20Package%20CI/badge.svg)

Create your own UI/UX library.

## Usage

- `yarn commit` - run commit wizard, all commits **should be** created with this command
- `yarn start` - start dev server on `http://localhost:8000`
- `yarn story-build` - build storybook
- `yarn lint` - runs eslint, prettier and stylelint and fixes source code

## Building

Script `yarn build` runs build scripts from `./build` directory.

Env variables:

- `DEBUG=woly:*` - shows debug lines
- `NEXT=true` - publishes version to the `next` npm dist-tag
- `DRY_RUN=true` - runs `npm publish` with `--dry-run` parameter
- `PACKAGE=name` - build only `name` package
- `PACKAGES=first,second` - build only `first` and `second` packages

Example:

```sh
DEBUG=woly:* NEXT=true DRY_RUN=true yarn build
```

## Publish process

1. Review [draft release](https://github.com/woly-ui/woly/releases) in GitHub
1. Set version from draft release to [versions.json](./versions.json)
1. Commit and push
1. At the [Publish Package CI](https://github.com/woly-ui/woly/actions/workflows/npm.yml) press "Run workflow"
1. Set "yes" for packages that need to be published, and press "Run workflow"

## Screenshot testing

### Description

Screenshot testing is the automated process of comparing the visible output of a component against a baseline image. It helps to prevent unwanted visual changes and to make sure that it works as intended.

All examples are based on the `woly` package.

### Writing and Organizing Tests

#### Folder Structure

Below you can see recommended folder structure. Test files MUST be inside `__screenshot-test__` directory, which directly inside the component's folder.

```
button/
├─ __screenshot-test__
│  ├─ config.json
│  ├─ index.tsx
├─ index.tsx
├─ usage.mdx
├─ specification.mdx

```

#### Test files

- `config.js` – config file for test-runner, which describes how to capture component's states
- `index.tsx` – a React component, that renders all combinations of the tested component via `StateMap` component from `lib/state-map`

##### **`config.json`**

| Name             | Type                               | Default value | Description                                                                                       |
| ---------------- | ---------------------------------- | ------------- | ------------------------------------------------------------------------------------------------- |
| `name`           | `string`                           | `null`        | Component's name                                                                                  |
| `selector`       | `string`                           | `null`        | Selector, which test-runner uses to find a component in a test page                               |
| `screenshotSize` | `{ width: number, height: number}` | `null`        | Screenshot's size. Final snapshot's width will be equal to `states amount` x `screenshot's width` |
| `states`         | `State[]`                          | `[]`          | States to capture                                                                                 |

##### **`State`**

A state can be described by a simple string like a `static` | `press` | `hover` | `focus`. The test-runner will bring a component to that state.

However, when it comes to more complex components, we need a flexible way to reproduce a state we want to capture.
In this case, pass an object instead of a string with the structure described below:

| Name      | Type       | Default value | Description                                                      |
| --------- | ---------- | ------------- | ---------------------------------------------------------------- |
| `name`    | `string`   | `null`        | State's name                                                     |
| `actions` | `function` | `null`        | An async function that will bring component to the desired state |

A `actions` function gets the following parameters:

- `el` – the actual component (see [methods](https://playwright.dev/docs/api/class-elementhandle))
- `elWrapper` – a component's wrapper. The test-runner makes a screenshot of this element. Has the same methods as `el`
- `disabled` – if component is disabled, some `playwright` methods can't be triggered on component and it will throw an error (see [actionability checks](https://playwright.dev/docs/actionability)). Check for this boolean before invocing methods like `fill` on input elements
- `page` – a test page (see [methods](https://playwright.dev/docs/api/class-page/))

<span style="color:#dc3545">**Attention**</span>: When using a function for describing a state, be aware that test-runner unable to reset the state after capturing it, state will be just passed unchanged to the next one. If you don't want this behavior, you can return a `reset` function from `state` that will be called before moving to the next state.

For example:

```js
{
  name: 'text-filled',
  actions: async ({ el, elWrapper, disabled, page }) => {
    const input = await el.$('input[type="password"]');
    await input.type('qwerty');

    // reset function
    return async () => {
      if(!disabled) {
        await input.fill(''); // remove the text in the input
      }
      await elWrapper.focus(); // remove the focus from the input
    }
  },
},
```

##### **`index.tsx`**

The example is based on the `Button` component.

```ts
import React from 'react';
import { IconPlus } from 'static/icons';
import { Sizes, StateMap, Priorities } from 'lib/state-map';
import { block } from 'lib/block';

import { Button } from '../index';

export const ButtonStateMap = () => {
  return (
    <StateMap
      // all `buttons` props variations
      propVariations={{
        disabled: [true, false],
        icon: [true, false],
        outlined: [true, false],
        size: Sizes,
        priority: Priorities,
      }}
      // prop, by wich the variants will be grouped
      groupByProp="variant"
      render={({ size, icon, priority, outlined, disabled }) => {
        const SizeBlock = block[size];

        return (
          <SizeBlock>
            <Button
              // provide classname for component and match it
              // in configs 'selector' option
              className="button-st"
              text="button"
              icon={icon ? <IconPlus /> : undefined}
              priority={priority}
              outlined={outlined}
              disabled={disabled}
            />
          </SizeBlock>
        );
      }}
    />
  );
};



```

### Local testing

Local testing can be run by the command `yarn test:screenshot`

Env variables:

- `DEBUG=screenshot:*` - shows debug lines
- `INCLUDE=first,second` - include only components `first` and `second` to testing. Has higher priority than `EXCLUDE`.
- `EXCLUDE=first,second` - exclude components `first` and `second` from testing

If you want to manually send snapshots to `percy`, pass `PERCY_TOKEN` env key with a token as the value (grab it in the `persy.io`'s `Project settings` section) and run test by the command `yarn percy exec`, e.g. `PERCY_TOKEN=***** yarn percy exec yarn test:screenshot`.
