# Polyfill for String.prototype.includes

[![Version](http://img.shields.io/npm/v/string-includes-polyfill.svg)](https://www.npmjs.org/package/string-includes-polyfill)
[![Build Status](https://travis-ci.org/alfaslash/string-includes-polyfill.svg?branch=master)](https://travis-ci.org/alfaslash/string-includes-polyfill)

[![NPM](https://nodei.co/npm/string-includes-polyfill.png)](https://www.npmjs.com/package/string-includes-polyfill)

Polyfill for string method `includes()` [ECMAScript 2015 (6th Edition, ECMA-262)](https://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.includes).

### Installation

`npm i string-includes-polyfill`

### Usage

```javascript

var str = 'Built for developers';

str.includes('Built');  // true
str.includes('for');    // true
str.includes('Build');  // false
str.includes('For');    // false

```

See more examples and description on the [page](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/includes).
