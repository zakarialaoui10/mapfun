def mapFunc(fun,x):
    if isinstance(x,(int,float,complex,str,bool)):return fun(x)
    if isinstance(x,list):return list(map(lambda n:mapFunc(fun,n),x))
    if isinstance(x,range):return list(map(lambda n:mapFunc(fun,n),x))
    if isinstance(x,tuple):return tuple(map(lambda n:mapFunc(fun,n),x))
    if isinstance(x,set):return set(map(lambda n:mapFunc(fun,n),x))
    if isinstance(x,frozenset):return frozenset(map(lambda n:mapFunc(fun,n),x))
    if isinstance(x,dict):return dict(map(lambda n:(n[0],mapFunc(fun,n[1])),x.items()))
    return 0

print(mapFunc(lambda a : a + 1,4))
print(mapFunc(lambda a : a + 1,4.2))
print(mapFunc(lambda a : len(a),"Ziko"))
print(mapFunc(lambda a : a + 5,[1, 2, 3, [4]]))
print(mapFunc(lambda a : a + 5,range(0,10)))
print(mapFunc(lambda a : a + 5,(1, 2, 3, [4])))
print(mapFunc(lambda a : a + 5,{1,2,3}))
print(mapFunc(lambda a : a + 5,frozenset({1,2,3})))
print(mapFunc(lambda a : a + 5,{"a":1,"b":2,"c":3}))
