import curry from "./curry";

export const intsec = curry((arrA, arrB) => arrA.filter(x => arrB.includes(x)));
