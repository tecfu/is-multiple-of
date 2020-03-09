# is-multiple-of

[![Build Status](https://travis-ci.org/tecfu/is-multiple-of.svg?branch=master)](https://travis-ci.org/tecfu/is-multiple-of) [![NPM version](https://badge.fury.io/js/is-multiple-of.svg)](http://badge.fury.io/js/is-multiple-of) [![Coverage Status](https://coveralls.io/repos/github/tecfu/is-multiple-of/badge.svg?branch=master)](https://coveralls.io/github/tecfu/is-multiple-of?branch=master)
---

Floating point modulus operator functionality for javascript. 
Accurate to 16 digits and 6 decimal places.

---

## Rationale

- javascript can't divide floats accurately: i.e. 4.55 / .05 === 90.999999

```js
4.55 % .05 === 0         // false
```

whereas:

```js
multipleOf(4.55, .05)     // true
```

## Installation

- Node Module

```sh
$ npm install @tecfu/is-multiple-of
```

- Browser

```js
import multipleOf from 'https://cdn.jsdelivr.net/gh/tecfu/is-multiple-of/dist/is-multiple-of.esm.js'
let multipleOf = require('is-multiple-of')   // https://cdn.jsdelivr.net/gh/tecfu/is-multiple-of/dist/is-multiple-of.cjs.js
let multipleOf = IsMultipleOf;             // https://cdn.jsdelivr.net/gh/tecfu/is-multiple-of/dist/is-multiple-of.umd.js
```

## Version Compatibility

| Node Version   |   multipleOf Version    |
| -------------- | ------------------|
| 8.0            | >= 1.0            |


## Running tests

```sh
$ npm test
```

## Pull Requests

Pull requests are encouraged!

- Please remember to add a unit test when necessary
- Please format your commit messages according to the ["Conventional Commits"](https://www.conventionalcommits.org/en/v1.0.0/) specification

If you aren't familiar with Conventional Commits, here's a good [article on the topic](https://dev.to/maniflames/how-conventional-commits-improved-my-git-skills-1jfk)

TL/DR:

- feat: a feature that is visible for end users.
- fix: a bugfix that is visible for end users.
- chore: a change that doesn't impact end users (e.g. chances to CI pipeline)
- docs: a change in the README or documentation
- refactor: a change in production code focused on readability, style and/or performance.


## License

[MIT License](https://opensource.org/licenses/MIT)

Copyright 2020, Tecfu. 
