def mapFunc(fun,x):
    if isinstance(x,(int,float,complex)):return fun(x)
    if isinstance(x,list):return map(fun,x)
    return 0
def add(x):
    return x+2
print(mapFunc(lambda a : a + 10j,4))
print(mapFunc(lambda a : a + 10j,[1,2,3,4]))
