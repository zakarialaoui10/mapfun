const mapFun = (fun, { skip = [], key = false, value = true } = {}, ...X) => {
  const Y = X.map((x) => {
    if (typeof skip === 'string' && typeof x === skip) return x;
    if (x === null) return fun(null);
    if (['number', 'string', 'boolean', 'bigint', 'undefined'].includes(typeof x)) return fun(x);
    if (x instanceof Array) return x.map((n) => mapFun(fun, n));
    if (ArrayBuffer.isView(x)) return Array.from(x).map((n) => fun(n));
    if (x instanceof Set) return new Set(mapFun(fun, ...[...x]));
    if (x instanceof Map) return new Map([...x].map((n) => [n[0], mapFun(fun, n[1])]));
    if (x instanceof Object) return Object.fromEntries(
      Object.entries(x).map(([key, value]) => [key, mapFun(fun,{},value)])
    )
    
    else throw new Error('Uncategorised data');
  });
    return Y.length === 1 ? Y[0] : Y;
};
if (typeof module !== 'undefined' && typeof exports !== 'undefined') {
  module.exports = { mapFun };
}
