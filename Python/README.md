# mapfun
- `mapfun` is a function that applies a mapping function to an infinite number of input elements, with options to skip certain elements and selectively apply the mapping to keys and/or values of objects.
- The `mapfun` function has been developed in JavaScript and Python, offering the same functionality in different programming languages.
### Install 
```bash
pip install mapfun
```
### Import 
```bash
from mapfun import mapfun
```
### Arguments
- `fun` : The mapping function that will be applied to each element in the input elements.</br>
- `...X` :The elements to be mapped . </br>
- `{ "skip" , "key" , "value" }` : Object with three optional properties :
    * `"skip"` : specifies the elements to skip during the mapping process.
    * `"key"` : boolean flag indicating whether to apply the mapping function to the keys of objects or not. The default value is `false`
    * `"value"` : boolean flag indicating whether to apply the mapping function to the values of objects or not. The default value is `true`
### Examples 
```python
print(mapfun(lambda a : a + 1,{},4))
# Expected return : 5
print(mapfun(lambda a : a + 1.0,{},4.2))
# Expected return : 5.2
print(mapfun(lambda a : len(a),{},"Ziko"))
# Expected return : 4
print(mapfun(lambda a : a + 5,{},[1, 2, 3, [4]]))
# Expected return : [6,7,8,[9]]
print(mapfun(lambda a : a + 5,range(0,10)))
print(mapfun(lambda a : a + 5,{},(1, 2, 3, [4])))
print(mapfun(lambda a : a + 5,{},{1,2,3}))
print(mapfun(lambda a : a + 5,frozenset({1,2,3})))
print(mapfun(lambda a : a + 5,{},{"a":1,"b":2,"c":3}))
print(mapfun(lambda x:x+1,{},1,2,3,[1,2]))
print(mapfun(lambda x:x+1,{},1,2,3,[1,2]))
```
# Supported Datatypes
|Datatype|Support|
|---|-|
|`int`|✅|
|`float`|✅|
|`Boolean`|✅|
|`str`|✅|
|`bytes`|✅|
|`bytearray`|✅|
|`memoryview`|✅|
|`None`|✅|
|`object`|✅|
|`list`|✅|
|`set`|✅|
|`dict`|✅|
|`tuple`|✅|
|`range`|✅|

# Alternatives
## [Javascript](https://github.com/zakarialaoui10/mapfun/blob/main/Javascript/README.md)
# License 
This projet is licensed under the terms of MIT License .<br>
<img src="https://img.shields.io/github/license/zakarialaoui10/zikojs?color=rgb%2820%2C21%2C169%29">
