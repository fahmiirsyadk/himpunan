import curry from "./curry";

export const diff = curry((arrA, arrB) => {
  return arrA
    .filter(x => !arrB.includes(x))
    .concat(arrB.filter(x => !arrA.includes(x)));
});
