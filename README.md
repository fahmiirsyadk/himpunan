# :blossom: himpunan
![npm_min](https://badgen.net/bundlephobia/min/himpunan)
![npm version](https://badgen.net/npm/v/himpunan)

javascript library untuk kalkulasi himpunan

## Features
- **union** of sets
- **intersection** of sets
- **complement** of sets

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
console.log(complement(s, union(k, l)));
```


## API
### union(arrA, arrB)
Returns an `array` union of sets
```js
  const a = [1, 2, 3, 4, 5, 6, 7, 8];
  const b = [2, 4, 6, 8];
  const c = [2, 3, "a", "b", "c"];
  
  // (a u b)
  console.log(union(a, b));
  
  // (a u b) u c
  console.log(union(union(a, b), c));
```

### intsec(arrA, arrB)
Returns an `array` intersection of sets
```js
  const a = [1, 2, 3, 4, 5, 6, 7, 8];
  const b = [2, 4, 6, 8];
  const c = [2, 3, 7, 8];
  
  // (a n b) n c
  console.log(intsec(intsec(a, b), c));
```

### complement(arrSpace, arrEvent)
Returns an `array` complement of sets
```js
  const s = [0, 1, 2, 3, 4, 5, 6, 7];
  const k = [0, 1, 2, 3];
  const l = [3, 4, 5];
  
  // s - (k u l)
  console.log(complement(s, union(k, l)));
```

