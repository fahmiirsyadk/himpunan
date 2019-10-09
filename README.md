# :blossom: himpunan
![npm_min](https://badgen.net/bundlephobia/min/himpunan)
![npm version](https://badgen.net/npm/v/himpunan)

javascript library for solving set operations

## Features
- curried by default
- **union** of sets
- **intersection** of sets
- **complement** of sets
- **symmetric difference** of sets

## Install
```bash
$ npm install himpunan
```

or 

```bash
$ yarn add himpunan
```

## Usage
```js
const { complement, union } = require("himpunan");

const s = [0, 1, 2, 3, 4, 5, 6, 7];
const k = [0, 1, 2, 3];
const l = [3, 4, 5];
  
// s - (k u l)
console.log(complement(s, union(k, l))); // [6,7]
```


## API
### union(arrA, arrB)
Returns an `array` union of sets
```js
  const a = [1, 2, 3, 4, 5, 6, 7, 8];
  const b = [2, 4, 6, 8];
  const c = [2, 3, "a", "b", "c"];
  
  // (a u b)
  console.log(union(a, b)); // [1, 2, 3, 4, 5, 6, 7, 8]
  
  // (a u b) u c
  console.log(union(union(a, b), c)); // [1, 2, 3, 4, 5, 6, 7, 8, 'a', 'b', 'c']
```

### intersection(arrA, arrB)
Returns an `array` intersection of sets
```js
  const a = [1, 2, 3, 4, 5, 6, 7, 8];
  const b = [2, 4, 6, 8];
  const c = [2, 3, 7, 8];
  
  // (a n b) n c
  console.log(intersection(intersection(a, b), c)); // [2,8]
```

### complement(arrSpace, arrEvent)
Returns an `array` complement of sets
```js
  const s = [0, 1, 2, 3, 4, 5, 6, 7];
  const k = [0, 1, 2, 3];
  const l = [3, 4, 5];
  
  // s - (k u l)
  console.log(complement(s, union(k, l))); [6,7]
```

### diff(arrA, arrB)
Return an `array` symmetric difference (diff) of sets
```js
const s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", "b"];
const a = [1, 2, 3, 4, 5];
const b = [2, 3, 5, 6, "a"];

// can curry
const resDiff = diff(a);

console.log(complement(s, resDiff(b))); // [2, 3, 5,  7, 8, 9, 10, 'b']
```
