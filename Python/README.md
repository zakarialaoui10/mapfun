## Python ( Not published yet)
### Install 
```bash
pip install @ziko/mapfunc
```
### Examples 
```python
print(mapfunc(lambda a : a + 1,{},4))
# Expected return : 5
print(mapfunc(lambda a : a + 1.0,{},4.2))
# Expected return : 5.2
print(mapfunc(lambda a : len(a),{},"Ziko"))
# Expected return : 4
print(mapfunc(lambda a : a + 5,{},[1, 2, 3, [4]]))
# Expected return : [6,7,8,[9]]
print(mapfunc(lambda a : a + 5,range(0,10)))
print(mapfunc(lambda a : a + 5,{},(1, 2, 3, [4])))
print(mapfunc(lambda a : a + 5,{},{1,2,3}))
print(mapfunc(lambda a : a + 5,frozenset({1,2,3})))
print(mapfunc(lambda a : a + 5,{},{"a":1,"b":2,"c":3}))
print(mapfunc(lambda x:x+1,{},1,2,3,[1,2]))
print(mapfunc(lambda x:x+1,{},1,2,3,[1,2]))
```

# License 
This projet is licensed under the terms of MIT License .<br>
<img src="https://img.shields.io/github/license/zakarialaoui10/zikojs?color=rgb%2820%2C21%2C169%29">