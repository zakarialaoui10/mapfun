|Langage|Problem|Solution|
|-|-|-|
|Javascript|![problem](./Javascript/assets/problem.png)|![problem](./Javascript/assets/solution.png)|
|Python|![problem](./Javascript/assets/problem.png)|![problem](./Javascript/assets/solution.png)|

The magic function called `mapfunc`
# mapfun
- `mapfunc` is a function that applies a mapping function to an infinite number of input elements, with options to skip certain elements and selectively apply the mapping to keys and/or values of objects.

- The `mapfun` function has been developed in JavaScript and Python, offering the same functionality in different programming languages.
  - [Javascript](https://github.com/zakarialaoui10/mapfun/tree/main/Javascript#readme)
    * [NPM](https://www.npmjs.com/package/mapfun)
  - [Python](https://github.com/zakarialaoui10/mapfun/tree/main/Python#readme)
    * [PyPI](https://pypi.org/project/mapfun/)
# Syntax 
|Javascript|Python|
|-|-|
|`mapfun(callback,{},...args)`|`mapfun(callback,{},*args)`|
# Install 
|Javascript|Python|
|-|-|
|`npm i mapfun`|`pip install mapfun`|
### Arguments
- `fun` : The mapping function that will be applied to each element in the input elements.</br>
- `...X` javascripters or`*X` for pythonista :The elements to be mapped . </br>
- `{ skip , key , value }` : Object with three optional properties :
    * `skip` : specifies the elements to skip during the mapping process.
    * `key` : boolean flag indicating whether to apply the mapping function to the keys of objects or not. The default value is `false`
    * `value` : boolean flag indicating whether to apply the mapping function to the values of objects or not. The default value is `true`
# Supported Datatypes
|Javascript|Support|Python|Support|
|---|-|---|-|
|`Number`|✅|`int`|✅|
|`String`|✅|`str`|✅|
|`Boolean`|✅|`Boolean`|✅|
|`Null`|✅|`float`|✅|
|`NaN`|✅|`None`|✅|
|`Undefined`|✅|`memoryview`|✅|
|`BigInt`|✅|`complex`|❌|
|`Array`|✅|`list`|✅|
|`Object`|✅|`object`|✅|
|`Map`|✅|`dict`|✅|
|`Set`|✅|`set`|✅|
|`WeakMap`|❌|`tuple`|✅|
|`WeakSet`|❌|`bytes`|✅|
|`ArrayBuffer`|✅|`bytearray`|✅|
|`Symbol`|❌|`range`|✅|

# License 
This projet is licensed under the terms of MIT License .<br>
<img src="https://img.shields.io/github/license/zakarialaoui10/zikojs?color=rgb%2820%2C21%2C169%29">
