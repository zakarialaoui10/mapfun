const mapFun=(fun,...X)=>{
    const Y=X.map(x=>{
        if(x===null)return fun(null);
        if(["number","string","boolean","bigint","undefined"].includes(typeof x))return fun(x);
        if(x instanceof Array)return x.map(n=>mapFun(fun,n));
        if(ArrayBuffer.isView(x))return x.map(n=>fun(n));
        if(x instanceof Set)return new Set(mapFun(fun,...[...x]));
        if(x instanceof Map)return new Map([...x].map(n=>[n[0],mapFun(fun,n[1])]));
        if(x instanceof Object)return Object.fromEntries(Object.entries(x).map(n=>n=[n[0],mapFun(fun,n[1])]))
    });
   return Y.length==1?Y[0]:Y; 
}
console.log(
  mapFun((a) => a + 2, 1, "a", [1, 2, 3], true, {
    a: 2,
    b: 3,
    c: { d: 3, e: [1, 3, 4] },
  })
);
const sin=(...args)=>mapFun(Math.sin,...args)
module.exports=mapFun;
