# mapfun

- `mapfun` is a function that applies a mapping function to an infinite number of input elements, with options to skip certain elements and selectively apply the mapping to keys and/or values of objects.

- The `mapfun` function has been developed in JavaScript and Python, offering the same functionality in different programming languages.

##### Syntax
```javascript
mapFun(fun,{skip,key,value},...X)
```

- [Javascript](#javascript)
- [Python](#python)

## Javascript 
### Install 
```bash
npm install mapfunjs 
```

### Arguments
- `fun` : The mapping function that will be applied to each element in the input elements.</br>
- `...X` :The elements to be mapped . </br>
- `{ skip , key , value }` : Object with three optional properties :
    * `skip` : specifies the elements to skip during the mapping process.
    * `key` : boolean flag indicating whether to apply the mapping function to the keys of objects or not. The default value is `false`
    * `value` : boolean flag indicating whether to apply the mapping function to the values of objects or not. The default value is `true`
### Examples 
```javascript
console.log(
  mapFun(n => n + 2,{}, 1,"a", [1, 2, 3], true, {
    a: 2,
    b: 3,
    c: { d: 3, e: [1, 3, 4] },
  })
);
/* Expected log
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
const sin=(...args)=>mapFun(Math.sin,{},...args)
console.log(sin(0,PI/4,[0,PI/6,PI/4,{x:PI/8,y:PI/12}]))
/* Expected log
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
### Advanced Examples 
```javascript
 const A=new Map([["a",1],["b",2]]);
 // Map { 'a' => 1, 'b' => 2 }
 console.log(mapFun(n=>n+1,{},A));
 /* Expected log 
   Map { 'a' => 2, 'b' => 3 }
 */
 console.log(mapFun(n=>n+1,{key:true},A));
 /* Expected log 
   Map { 'a1' => 2, 'b1' => 3 }
 */
 console.log(mapFun(n=>n+1,{value:false},A));
 /* Expected log 
   Map { 'a' => 1, 'b' => 2 }
 */
 console.log(mapFun(n=>n+1,{key:true,value:false},A));
 /* Expected log 
   Map { 'a1' => 1, 'b1' => 2 }
 */
```
## Python 
### Install 
```bash
pip install @ziko/mapFun
```
### Examples 
```python
print(mapFun(lambda a : a + 1,{},4))
# Expected return : 5
print(mapFun(lambda a : a + 1.0,{},4.2))
# Expected return : 5.2
print(mapFun(lambda a : len(a),{},"Ziko"))
# Expected return : 4
print(mapFun(lambda a : a + 5,{},[1, 2, 3, [4]]))
# Expected return : [6,7,8,[9]]
print(mapFun(lambda a : a + 5,range(0,10)))
print(mapFun(lambda a : a + 5,{},(1, 2, 3, [4])))
print(mapFun(lambda a : a + 5,{},{1,2,3}))
print(mapFun(lambda a : a + 5,frozenset({1,2,3})))
print(mapFun(lambda a : a + 5,{},{"a":1,"b":2,"c":3}))
print(mapFun(lambda x:x+1,{},1,2,3,[1,2]))
print(mapFun(lambda x:x+1,{},1,2,3,[1,2]))
```

# License 
This projet is licensed under the terms of MIT License .<br>
<img src="https://img.shields.io/github/license/zakarialaoui10/zikojs?color=rgb%2820%2C21%2C169%29">
