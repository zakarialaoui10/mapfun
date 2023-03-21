def mapFunc(fun,x):
    if isinstance(x,(int,float,complex)):return fun(x)
    if isinstance(x,list):return map(lambda n:mapFunc(fun,n),x)
    return 0
print(mapFunc(lambda a : a + 10j,4))
a=mapFunc(lambda a : a + 5,[1, 2, 3, [4]])
print(*a)
