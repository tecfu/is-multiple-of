# is-multiple-of

[![Build Status](https://github.com/tecfu/is-multiple-of/actions/workflows/ci.yml/badge.svg)](https://github.com/tecfu/is-multiple-of/actions/workflows/ci.yml) [![NPM version](https://badge.fury.io/js/is-multiple-of.svg)](http://badge.fury.io/js/is-multiple-of)
---

Floating point modulus operator functionality for javascript.

The implementation normalizes decimal values into integers and uses `BigInt` arithmetic, avoiding the rounding errors of JavaScript's `%` operator for decimal inputs. Numeric strings and scientific notation are supported without the old six-decimal-place limitation.

---

## Rationale

JavaScript can't always divide floats accurately: for example:

```js
4.55 % 0.05 === 0 // false
```

whereas:

```js
multipleOf(4.55, 0.05) // true
```

## Installation

```sh
$ npm install @tecfu/is-multiple-of
```

## Usage

```js
const multipleOf = require('@tecfu/is-multiple-of')

multipleOf(4.55, 0.05) // true
multipleOf('7e-20', '1e-20') // true
multipleOf('9007199254740993', '3') // true
```

Inputs must be finite numbers or decimal numeric strings. Values such as booleans, empty strings, `NaN`, and `Infinity` are rejected.

## Version Compatibility

| Node Version | multipleOf Version |
| ------------ | ------------------ |
| 18+          | >= 1.0             |

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
- chore: a change that doesn't impact end users (e.g. changes to CI pipeline)
- docs: a change in the README or documentation
- refactor: a change in production code focused on readability, style and/or performance.

## License

[MIT License](https://opensource.org/licenses/MIT)

Copyright 2020, Tecfu.
