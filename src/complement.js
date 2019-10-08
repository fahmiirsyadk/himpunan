import curry from "./curry";
import { union } from "./union";

export const complement = curry((s, arr) =>
  union(s, arr).filter(x => !arr.includes(x))
);
