<?php
function mapfun(callable $callback, ...$data) {
    $result = [];
    foreach ($data as $item) {
        $result[] = mapfunRecursive($callback, $item);
    }
    return $result;
}
function mapfunRecursive(callable $callback, $value) {
    if (is_array($value)) {
        return array_map(fn($v) => mapfunRecursive($callback, $v), $value);
    } elseif (is_object($value)) {
        $clonedObject = clone $value;
        foreach ($clonedObject as $key => $val) {
            $clonedObject->$key = mapfunRecursive($callback, $val);
        }
        return $clonedObject;
    } elseif (is_numeric($value)) {
        return $callback((float) $value);
    } else {
        return $value;
    }
}


