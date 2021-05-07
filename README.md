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
1. Set version from draft release to [package.json](./package.json)
1. Commit and push
1. At the [Publish Package CI](https://github.com/woly-ui/woly/actions/workflows/npm.yml) press "Run workflow"
1. Set "yes" for packages that need to be published, and press "Run workflow"
