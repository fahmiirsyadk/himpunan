import curry from "./curry";

export const intersection = curry((arrA, arrB) =>
  arrA.filter(x => arrB.includes(x))
);
