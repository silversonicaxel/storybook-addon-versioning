# Storybook Addon Version

[![npm version](https://badge.fury.io/js/storybook-version.svg)](https://www.npmjs.com/package/storybook-version)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Storybook Addon Version](https://storybook.js.org/addons/storybook-version/) displays the version of a component or package directly in the [Storybook](https://storybook.js.org) toolbar, making it easy to identify which version is currently being viewed.

## Installation

```sh
npm install storybook-version --save-dev
```

## Setup

### 1. Register the addon

Add the addon to the `addons` array in your Storybook `main` configuration file:

```js
const config: StorybookConfig = {
    addons: ["storybook-version"],
};

export default config;

```

### 2. Configure version parameters

Set the `version` parameter in your story to provide the version information to display.

#### Parameters

| Property | Required | Type | Description | Example |
|---|---|---|---|---|
| `major` | ✔ | `string` | Major version number | `'1'` |
| `minor` | ✔ | `string` | Minor version number | `'2'` |
| `patch` | ✔ | `string` | Patch version number | `'3'` |
| `postfix` | | `string` | Additional version label (e.g. pre-release identifier) | `'beta.1'` |
| `style` | | `Record<string, string>` | CSS properties to override the default toolbar badge style | `{ color: 'red', 'border-width': '2px' }` |

#### Global configuration

To apply a version across all stories, set the parameter globally in your `preview`:

```js
export const parameters = {
  version: {
    major: '1',
    minor: '2',
    patch: '3'
  }
}
```

## Story-level Example

Override or set the version for a specific story by adding the `version` parameter to its default export:

```js
import React from 'react'

export default {
  title: 'Component Button',
  parameters: {
    version: {
      major: '4',
      minor: '2',
      patch: '0',
      postfix: 'rc3',
      style: {
        color: 'red',
        'font-weight': '900',
        'font-size': '24px'
      }
    }
  }
}
```

> Story-level parameters take precedence over global parameters, allowing you to show different versions per component.

## Storybook compatibility

| Storybook version | Addon latest supported version |
|---|---|
| `6` | `0.1.1` |
| `8` | `0.1.2` |
| `9` | `0.1.4` |
| `10` | latest |
