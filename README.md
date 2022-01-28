# Storybook Addon Version

The [Storybook Addon Version](https://storybook.js.org/addons/storybook-version/) is used to highlight the version of a component or of a package within [Storybook](https://storybook.js.org) toolbar.
## Installation

```sh
npm install storybook-version --save-dev
```

## Basic Setup

Add the following code in the `main.js` of your Storybook configuration:

```js
module.exports = {
  addons: ['storybook-version'],
};
```

Set the parameters of your story with the key value `version` in order to provide the necessary information to be displayed.

**Configuration**

| Property | Required | Type of Value | Description | Example |
|---|---|---|---|---|
| major | ✔ | string | Major version | '1' |
| minor | ✔ | string | Minor version | '2' |
| patch | ✔ | string | Patch version | '3' |
| postfix | | string | Postifx version extra data | 'beta.1'
| style | | object of keys string and values string  | Extra css properties to overwrite default style of the Version | '{ 'color' : 'red', 'border-width': '2px' }' |

**Implementation**

```js
export const parameters = {
  version: {
    major: '1',
    minor: '2',
    patch: '3'
  }
}
```

## Story Setup Example

Add the `version` parameter in the default Story configuration:

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