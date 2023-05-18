# mapFun
- [Javascript](#javascript)
- [Python](#python)

## Javascript 
### Install 
```bash
npm install @ziko/mapFun
```
### arguments
- `fun` : The mapping function that will be applied to each element in the input elements.</br>
- `...X` :The elements to be mapped . </br>
- `{ skip = [], key = false, value = true } = {}` : Object with three optional properties :
    * `skip` : specifies the elements to skip during the mapping process.
    * `key` : boolean flag indicating whether to apply the mapping function to the keys of objects or not. The default value is `false`
    * `value` : boolean flag indicating whether to apply the mapping function to the values of objects or not. The default value is `true`
### Examples 
```javascript
console.log(
  mapFun(n => n + 2, 1, "a", [1, 2, 3], true, {
    a: 2,
    b: 3,
    c: { d: 3, e: [1, 3, 4] },
  })
);
/* Expected returns 
[
  3,
  "a2",
  [3, 4, 5],
  3,
  {
    a: 4,
    b: 5,
    c: {
      d: 5,
      e: [3, 5, 6],
    },
  },
];
*/
```
```javascript
const PI=Math.PI
const sin=(...args)=>mapFun(Math.sin,...args)
console.log(sin(0,PI/4,[0,PI/6,PI/4,{x:PI/8,y:PI/12}]))
/* Expected returns
[
  0,
  0.7071067811865475,
  [
    0,
    0.49999999999999994,
    0.7071067811865475,
    {
      x: 0.3826834323650898,
      y: 0.25881904510252074,
    },
  ],
];
*/
```
## Python 
### Install 
```bash
pip install @ziko/mapFun
```
### Examples 
```python
print(mapFun(lambda a : a + 1,4))
# Expected return : 5
print(mapFun(lambda a : a + 1,4.2))
# Expected return : 5.2
print(mapFun(lambda a : len(a),"Ziko"))
# Expected return : 4
print(mapFun(lambda a : a + 5,[1, 2, 3, [4]]))
# Expected return : [6,7,8,[9]]
print(mapFun(lambda a : a + 5,range(0,10)))
print(mapFun(lambda a : a + 5,(1, 2, 3, [4])))
print(mapFun(lambda a : a + 5,{1,2,3}))
print(mapFun(lambda a : a + 5,frozenset({1,2,3})))
print(mapFun(lambda a : a + 5,{"a":1,"b":2,"c":3}))
print(mapfun(lambda x:x+1,1,2,3,[1,2]))
print(mapfun(lambda x:x+1,1,2,3,[1,2]))
```
