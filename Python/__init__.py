def mapFun(fun, options={}, *X):
    if 'skip' in options:
        skip=options["skip"]
    else : skip=[str]
    if 'key' in options:
        key=options["key"]
    else : key=False
    if 'value' in options:
        value=options["value"]
    else : value=True
    def mapRecursive(x):
        if isinstance(skip, list) and (type(x) in skip or x in skip):
            return x
        if isinstance(x, (int, float, str, bool, bytes, bytearray, memoryview, type(None))):
            return fun(x)
        if isinstance(x, list):
            return [mapRecursive(n) for n in x]
        if isinstance(x, set):
            return {mapRecursive(n) for n in x}
        if isinstance(x, dict):
            return {mapRecursive(k) if key else k: mapRecursive(v) if value else v for k, v in x.items()}
        if isinstance(x, (tuple, range)):
            return type(x)(mapRecursive(n) for n in x)
        if isinstance(x, object):
            return fun(x)
        else:
            raise ValueError('Uncategorized data')
    return [mapRecursive(x) for x in X]


# Example
def square(x):
    return x ** 2
result = mapFun(square, {}, 1, 'hello', [2, 3], {4: 'world'})
print(result)
