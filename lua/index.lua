function mapfun(callback, ...)
    local args = {...}
    local results = {}
    for i, item in ipairs(args) do
        table.insert(results, mapfunRecursive(callback, item))
    end
    return results
end
function mapfunRecursive(callback, value)
    if type(value) == "table" then
        local clonedTable = {}
        for k, v in pairs(value) do
            clonedTable[k] = mapfunRecursive(callback, v)
        end
        return clonedTable
    elseif type(value) == "number" then
        return callback(value)
    else
        return value
    end
end