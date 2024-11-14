# mapfun function that takes a callback and multiple data arguments
mapfun = (callback, ...data) ->
  data.map (item) -> mapfunRecursive(callback, item)

# Recursive helper function
mapfunRecursive = (callback, value) ->
  if Array.isArray(value)
    # Recursively map over each element in an array
    value.map (v) -> mapfunRecursive(callback, v)
  else if typeof value is 'object' and value isnt null
    # Clone the object to avoid modifying the original
    clonedObject = {}
    for key, val of value
      clonedObject[key] = mapfunRecursive(callback, val)
    clonedObject
  else if typeof value is 'number'
    # Apply the callback to numeric values
    callback(value)
  else
    # Return other types as-is
    value


