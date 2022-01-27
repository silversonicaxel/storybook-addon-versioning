# Storybook Addon Version

The Addon Version is used to highlight the version of a component or of a package within [Storybook](https://storybook.js.org) toolbar.
## Installation

```sh
npm install @silversonicaxel/storybook-addon-version --save-dev
```

## Basic Setup

Add the following code in the `main.js` of your Storybook configuration:

```js
module.exports = {
  addons: ['@silversonicaxel/storybook-addon-version'],
};
```

Set the parameters of your story with the key value `version` in order to provide the necessary information to be displayed

```js
export const parameters = {
  version: {
    major: '1',
    minor: '2', 
    patch: '3'
  }
}
```

## Story Setup

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
      postfix: 'rc3'
    }
  }
}
```