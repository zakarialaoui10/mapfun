def mapFunc(fun,x):
    if isinstance(x,(int,float,complex,str)):return fun(x)
    if isinstance(x,list):return list(map(lambda n:mapFunc(fun,n),x))
    return 0
print(mapFunc(lambda a : a + 1,4))
print(mapFunc(lambda a : a + 1,4.2))
print(mapFunc(lambda a : len(a),"Ziko"))
print(mapFunc(lambda a : a + 1,4j))

a=mapFunc(lambda a : a + 5,[1, 2, 3, [4]])
print(a)
