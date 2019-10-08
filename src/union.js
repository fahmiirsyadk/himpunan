import curry from "./curry";

export const union = curry((arrA, arrB) => {
  const _ = [...arrA, ...arrB];
  return _.filter((item, index) => _.indexOf(item) === index);
});
