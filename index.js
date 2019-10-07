module.exports.union = (arrA, arrB) => [...new Set([...arrA, ...arrB])];
module.exports.intsec = (arrA, arrB) => arrA.filter(x => arrB.includes(x));
module.exports.complement = (s, arr) =>
  this.union(s, arr).filter(x => !arr.includes(x));
