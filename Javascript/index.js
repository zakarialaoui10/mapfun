/*
Developped by zakaria elaloui
Github : https://github.com/zakarialaoui10
*/
function flat_obj(obj,depth=Infinity,separator = '.', replacement = '_') {
    const result = {};
    let i=0;
    function recurse(current, path = []) {
        if(i===depth){
            Object.assign(result,current)
            return ;
        }
      for (const key in current) {
        const value = current[key];
        const newPath = [...path, key];
        if (typeof value === 'object' && !Array.isArray(value)) {
          recurse(value, newPath);
        } else {
          const flatKey = newPath.join(separator).replace(new RegExp(`\\${separator}`, 'g'), replacement);
          result[flatKey] = value;
        }
        i++;
      }
    }
    recurse(obj);
    return result;
}
const mapfun = (fun, { skip = [], key = false, value = true } = {}, ...X) => {
  const Y = X.map((x) => {
    if (typeof skip === 'string'||[null,undefined].includes(skip))skip=[skip];
      const skipPrimitives = [];
      const skipObjects = [];
      skip.forEach((element) =>(typeof element==="object"&&element !==null)?skipObjects.push(element):skipPrimitives.push(element));
        if(skipPrimitives.includes(typeof x)||skipPrimitives.includes(x)) return x;
        if(skipObjects.some(n=>x instanceof n))return x;
    if (x === null) return fun(null);
    if (['number', 'string', 'boolean', 'bigint', 'undefined'].includes(typeof x)) return fun(x);
    if (typeof(x)==="symbol") throw new Error('symbols are not supported yet !');
    if (x instanceof Array) return x.map((n) => mapfun(fun,{},n));
    if (ArrayBuffer.isView(x)) return Array.from(x).map((n) => fun(n));
    if (x instanceof Set) return new Set(mapfun(fun,{},...[...x]));
    if (x instanceof WeakSet) throw new Error('WeakSets not supported yet !');
    if (x instanceof WeakMap) throw new Error('WeakMaps not supported yet !');
    if (x instanceof Map) return new Map([...x].map(n =>{
        return [
            key ? mapfun(fun,{},n[0]) : n[0],
            value ? mapfun(fun,{},n[1]) : n[1],
            ]
    }));
    if (x instanceof Object) return Object.fromEntries(
      Object.entries(x).map(([KEY, VALUE]) => [
        key?mapfun(fun,{},KEY):KEY,
        value?mapfun(fun,{},VALUE):VALUE
      ])
    )
    else throw new Error('Uncategorised data');
  });
    return Y.length === 1 ? Y[0] : Y;
};
if (typeof module !== 'undefined' && typeof exports !== 'undefined') {
  module.exports = {flat_obj} ;
  module.exports = mapfun;
}
