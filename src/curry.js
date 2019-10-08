const _bind = Function.prototype.bind;

const curry = (fn, self) => {
  const out = (...args) => {
    if (args.length === 0) return out;

    return args.length > 1
      ? fn.apply(self, args)
      : _bind.call(fn, self, args[0]);
  };
  return out;
};

export default curry;
