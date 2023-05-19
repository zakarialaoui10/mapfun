const mapfunc = (fun, { skip = [], key = false, value = true } = {}, ...X) => {
  const Y = X.map((x) => {
    if (typeof skip === 'string'||[null,undefined].includes(skip))skip=[skip];
      const skipPrimitives = [];
      const skipObjects = [];
      skip.forEach((element) =>(typeof element==="object"&&element !==null)?skipObjects.push(element):skipPrimitives.push(element));
        if(skipPrimitives.includes(typeof x)||skipPrimitives.includes(x)) return x;
        if(skipObjects.some(n=>x instanceof n))return x;
    if (x === null) return fun(null);
    if (['number', 'string', 'boolean', 'bigint', 'undefined'].includes(typeof x)) return fun(x);
    if (x instanceof Array) return x.map((n) => mapfunc(fun,{},n));
    if (ArrayBuffer.isView(x)) return Array.from(x).map((n) => fun(n));
    if (x instanceof Set) return new Set(mapfunc(fun,{},...[...x]));
    if (x instanceof Map) return new Map([...x].map(n =>{
        return [
            key?mapfunc(fun,{},n[0]):n[0],
            value?mapfunc(fun,{},n[1]):n[1],
            ]
    }));
    if (x instanceof Object) return Object.fromEntries(
      Object.entries(x).map(([KEY, VALUE]) => [
        key?mapfunc(fun,{},KEY):KEY,
        value?mapfunc(fun,{},VALUE):VALUE
      ])
    )
    else throw new Error('Uncategorised data');
  });
    return Y.length === 1 ? Y[0] : Y;
};
if (typeof module !== 'undefined' && typeof exports !== 'undefined') {
  module.exports = mapfunc ;
}
