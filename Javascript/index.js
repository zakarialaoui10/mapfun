const mapFun = (fun, { skip = [], key = false, value = true } = {}, ...X) => {
  const isNodeModule = typeof module !== 'undefined' && typeof exports !== 'undefined';

  const Y = X.map((x) => {
    if (typeof skip === 'string' && typeof x === skip) return x;
    if (x === null) return fun(null);
    if (['number', 'string', 'boolean', 'bigint', 'undefined'].includes(typeof x)) return fun(x);
    if (x instanceof Array) return x.map((n) => mapFun(fun, n));
    if (ArrayBuffer.isView(x)) return Array.from(x).map((n) => fun(n));
    if (x instanceof Set) return new Set(mapFun(fun, ...[...x]));
    if (x instanceof Map) return new Map([...x].map((n) => [n[0], mapFun(fun, n[1])]));
    if (x instanceof Object) return Object.fromEntries(Object.entries(x).map((n) => (n = [n[0], mapFun(fun, n[1])])));
    else throw new Error('Uncategorised data');
  });

  if (isNodeModule) {
    return Y.length === 1 ? Y[0] : Y;
  } else {
    window.mapFun = mapFun;
  }
};

if (typeof module !== 'undefined' && typeof exports !== 'undefined') {
  module.exports = { mapFun };
}
