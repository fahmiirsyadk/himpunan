import { union } from "./union";

export function complement(s, arr) {
  return union(s, arr).filter(x => !arr.includes(x));
}
