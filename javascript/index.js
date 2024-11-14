/*
Developped by zakaria elaloui
Github : https://github.com/zakarialaoui10
*/
const mapfun = (callback, ...X) => {
  const Y = X.map((x) => {
    if (x === null) return callback(null);
    if (['number', 'string', 'boolean', 'bigint', 'undefined'].includes(typeof x)) return callback(x);
    if (typeof(x)==="symbol") throw new Error('symbols are not supported yet !');
    if (x instanceof Array) return x.map((n) => mapfun(callback,{},n));
    if (ArrayBuffer.isView(x)) return Array.from(x).map((n) => callback(n));
    if (x instanceof Set) return new Set(mapfun(callback,{},...[...x]));
    if (x instanceof WeakSet) throw new Error('WeakSets not supported yet !');
    if (x instanceof WeakMap) throw new Error('WeakMaps not supported yet !');
    if (x instanceof Map) return new Map([...x].map(n =>[n[0],mapfun(callback,n[1])]));
    if (x instanceof Object) return Object.fromEntries(
      Object.entries(x).map(([key, value]) => [
        key,
        mapfun(callback,value)
      ])
    )
    else throw new Error('Uncategorised data');
  });
    return Y.length === 1 ? Y[0] : Y;
};