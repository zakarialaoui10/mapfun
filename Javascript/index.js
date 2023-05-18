const mapFun = (fun, { skip = [], key = false, value = true } = {}, ...X) => {
  const Y = X.map((x) => {
    if (typeof skip === 'string'||[null,undefined].includes(skip))skip=[skip];
      const skipPrimitives = [];
      const skipObjects = [];
      skip.forEach((element) =>(typeof element==="object"&&element !==null)?skipObjects.push(element):skipPrimitives.push(element));
        if(skipPrimitives.includes(typeof x)||skipPrimitives.includes(x)) return x;
        if(skipObjects.some(n=>x instanceof n))return x;

    if (x === null) return fun(null);
    if (['number', 'string', 'boolean', 'bigint', 'undefined'].includes(typeof x)) return fun(x);
    if (x instanceof Array) return x.map((n) => mapFun(fun,{},n));
    if (ArrayBuffer.isView(x)) return Array.from(x).map((n) => fun(n));
    if (x instanceof Set) return new Set(mapFun(fun,{},...[...x]));
    if (x instanceof Map) return new Map([...x].map(n =>{
        return [
            key?mapFun(fun,{},n[0]):n[0],
            value?mapFun(fun,{},n[1]):n[1],
            ]
    }));
    if (x instanceof Object) return Object.fromEntries(
      Object.entries(x).map(([KEY, VALUE]) => [
        key?mapFun(fun,{},KEY):KEY,
        value?mapFun(fun,{},VALUE):VALUE
      ])
    )
    
    else throw new Error('Uncategorised data');
  });
    return Y.length === 1 ? Y[0] : Y;
};
if (typeof module !== 'undefined' && typeof exports !== 'undefined') {
  module.exports = { mapFun };
}
a=new Map([["a",1],["b",2]]);
console.log(mapFun(n=>n+1,{skip:["string","number",null,undefined]},1,2,a,"k",[1,2],null,undefined,NaN))
