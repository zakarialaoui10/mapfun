# mapFun
# Javascript 
```javascript
console.log(
  mapFun((a) => a + 2, 1, "a", [1, 2, 3], true, {
    a: 2,
    b: 3,
    c: { d: 3, e: [1, 3, 4] },
  })
);
const PI=Math.PI
const sin=(...args)=>mapFun(Math.sin,...args)
console.log(sin(0,PI/4,[0,PI/6,PI/4,{x:PI/8,y:PI/12}]))
```
# Python 
```python
print(mapFun(lambda a : a + 1,4))
print(mapFun(lambda a : a + 1,4.2))
print(mapFun(lambda a : len(a),"Ziko"))
print(mapFun(lambda a : a + 5,[1, 2, 3, [4]]))
print(mapFun(lambda a : a + 5,range(0,10)))
print(mapFun(lambda a : a + 5,(1, 2, 3, [4])))
print(mapFun(lambda a : a + 5,{1,2,3}))
print(mapFun(lambda a : a + 5,frozenset({1,2,3})))
print(mapFun(lambda a : a + 5,{"a":1,"b":2,"c":3}))
print(mapfun(lambda x:x+1,1,2,3,[1,2]))
print(mapfun(lambda x:x+1,1,2,3,[1,2]))
```
