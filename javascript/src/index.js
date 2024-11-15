const mapfun = (callback, { skip = [], key = false, value = true } = {}, ...X) => {
  const Y = X.map((x) => {
    if (typeof skip === 'string'||[null,undefined].includes(skip))skip=[skip];
      const skipPrimitives = [];
      const skipObjects = [];
      skip.forEach(n =>(typeof n==="object" && n !== null)?skipObjects.push(n):skipPrimitives.push(n));
        if(skipPrimitives.includes(typeof x)||skipPrimitives.includes(x)) return x;
        if(skipObjects.some(n=>x instanceof n))return x;
    if (x === null) return callback(null);
    if (['number', 'string', 'boolean', 'bigint', 'undefined'].includes(typeof x)) return callback(x);
    if (typeof(x)==="symbol") throw new Error('symbols are not supported yet !');
    if (x instanceof Array) return x.map((n) => mapfun(callback,{},n));
    if (ArrayBuffer.isView(x)) return Array.from(x).map((n) => callback(n));
    if (x instanceof Set) return new Set(mapfun(callback,{},...[...x]));
    if (x instanceof WeakSet) throw new Error('WeakSets not supported yet !');
    if (x instanceof WeakMap) throw new Error('WeakMaps not supported yet !');
    if (x instanceof Map) return new Map([...x].map(n =>{
        return [
            key ? mapfun(callback,{},n[0]) : n[0],
            value ? mapfun(callback,{},n[1]) : n[1]
          ]
    }));
    if (x instanceof Object) return Object.fromEntries(
      Object.entries(x).map(([KEY, VALUE]) => [
        key?mapfun(callback,{},KEY):KEY,
        value?mapfun(callback,{},VALUE):VALUE
      ])
    )
    else throw new Error('Uncategorised data');
  });
    return Y.length === 1 ? Y[0] : Y;
};
export{
  mapfun
}