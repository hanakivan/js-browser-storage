# "localStorage" alias that doesn't throw errors 

[![](https://flat.badgen.net/npm/v/@ivanhanak_com/browser-storage?icon=npm)](https://www.npmjs.com/package/@ivanhanak_com/browser-storage)
[![NPM Weekly Downloads](https://badgen.net/npm/dw/@ivanhanak_com/browser-storage)](https://www.npmjs.com/package/@ivanhanak_com/browser-storage)

A simple wrapper around `localStorage` API, that does not throw errors.  

## Changelog

See the whole [Changelog](/CHANGELOG.md).

## Install

Using npm:

```sh
npm install @ivanhanak_com/browser-storage
```

Using yarn:

```sh
yarn add @ivanhanak_com/browser-storage
```

## Import
```javascript
import BrowserStorage from '@ivanhanak_com/browser-storage';
```

## Usage
```javascript
//the same
localStorage.getItem(key);
BrowserStorage.getItem(key);

//the same
localStorage.setItem(key, value);
BrowserStorage.setItem(key, value);

//the same
localStorage.removeItem(key);
BrowserStorage.removeItem(key);
```

## Browser support
Exactly as the [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).