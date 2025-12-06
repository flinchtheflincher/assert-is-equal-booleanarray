# Assert Is Equal BooleanArray

![GitHub release](https://img.shields.io/github/release/flinchtheflincher/assert-is-equal-booleanarray.svg)
![GitHub issues](https://img.shields.io/github/issues/flinchtheflincher/assert-is-equal-booleanarray.svg)
![GitHub forks](https://img.shields.io/github/forks/flinchtheflincher/assert-is-equal-booleanarray.svg)
![GitHub stars](https://img.shields.io/github/stars/flinchtheflincher/assert-is-equal-booleanarray.svg)

## Overview

Welcome to the **Assert Is Equal BooleanArray** repository. This utility helps you test if two arguments are both `BooleanArrays` and have equal values. It's a simple yet powerful tool for ensuring data integrity in your JavaScript applications.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Release Information](#release-information)

## Features

- **Type Safety**: Ensures both arguments are `BooleanArrays`.
- **Value Comparison**: Compares the values of both arrays for equality.
- **Lightweight**: Minimal footprint, making it easy to integrate into existing projects.
- **JavaScript and Node.js Support**: Works seamlessly in both environments.

## Installation

To install the package, use npm or yarn:

```bash
npm install assert-is-equal-booleanarray
```

or

```bash
yarn add assert-is-equal-booleanarray
```

## Usage

To use the utility, import it into your project:

```javascript
const assertIsEqualBooleanArray = require('assert-is-equal-booleanarray');
```

Then, you can use it in your code as follows:

```javascript
const arr1 = new BooleanArray([true, false, true]);
const arr2 = new BooleanArray([true, false, true]);

const result = assertIsEqualBooleanArray(arr1, arr2);
console.log(result); // true or false
```

## Examples

Here are some examples of how to use the utility:

### Example 1: Equal BooleanArrays

```javascript
const arr1 = new BooleanArray([true, false, true]);
const arr2 = new BooleanArray([true, false, true]);

const result = assertIsEqualBooleanArray(arr1, arr2);
console.log(result); // true
```

### Example 2: Unequal BooleanArrays

```javascript
const arr1 = new BooleanArray([true, false, true]);
const arr2 = new BooleanArray([false, true, true]);

const result = assertIsEqualBooleanArray(arr1, arr2);
console.log(result); // false
```

### Example 3: Different Lengths

```javascript
const arr1 = new BooleanArray([true, false]);
const arr2 = new BooleanArray([true, false, true]);

const result = assertIsEqualBooleanArray(arr1, arr2);
console.log(result); // false
```

## API Reference

### `assertIsEqualBooleanArray(arr1, arr2)`

- **Parameters**:
  - `arr1`: The first BooleanArray to compare.
  - `arr2`: The second BooleanArray to compare.
  
- **Returns**: `true` if both arrays are equal; otherwise, `false`.

### Example:

```javascript
const isEqual = assertIsEqualBooleanArray(new BooleanArray([true]), new BooleanArray([true]));
console.log(isEqual); // true
```

## Contributing

We welcome contributions to this project. If you have suggestions for improvements or new features, please feel free to open an issue or submit a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push to your forked repository.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Release Information

For the latest releases, please visit our [Releases page](https://github.com/flinchtheflincher/assert-is-equal-booleanarray/releases). Download the latest version and follow the installation instructions to get started.

## Conclusion

The **Assert Is Equal BooleanArray** utility is a straightforward tool for ensuring that your `BooleanArrays` are equal. By using this utility, you can maintain data integrity and simplify your testing processes. Whether you are working in JavaScript or Node.js, this utility can enhance your development experience.

For more information on the latest releases, visit the [Releases section](https://github.com/flinchtheflincher/assert-is-equal-booleanarray/releases).