export function union(arrA, arrB) {
  return [...arrA, ...arrB].filter((item, index) => {
    return [...arrA, ...arrB].indexOf(item) === index;
  });
}
