<?php
function mapFun($fun, $options = [], ...$X) {
  $skip = isset($options['skip']) ? $options['skip'] : [];
  $key = isset($options['key']) ? $options['key'] : false;
  $value = isset($options['value']) ? $options['value'] : true; 
  $Y = array_map(function($x) use ($fun, $skip, $key, $value) {
    if (is_string($skip) || in_array($skip, [null, 'undefined']))$skip = [$skip];
    $skipPrimitives = [];
    $skipObjects = [];
    foreach ($skip as $element)(is_object($element) && $element !== null)?$skipObjects[] = $element:$skipPrimitives[] = $element;
    if (in_array(gettype($x), $skipPrimitives) || in_array($x, $skipPrimitives))return $x;
    if ($x === null)return $fun(null);
    if (in_array(gettype($x), ['integer', 'double', 'boolean', 'string']))return $fun($x);
    if (is_array($x)) {
      return array_map(function($n) use ($fun) {
        return mapFun($fun, [], $n);
      }, $x);
    }
    if (is_object($x)) {
      return array_reduce(array_map(function($KEY, $VALUE) use ($fun, $key, $value) {
        return [
          $KEY,
          $value ? mapFun($fun, [], $VALUE) : $VALUE,
        ];
      }, array_keys(get_object_vars($x)), array_values(get_object_vars($x))), function($carry, $item) {
        [$KEY, $VALUE] = $item;
        $carry[$KEY] = $VALUE;
        return $carry;
      }, []);
    }
    else throw new Exception('Uncategorized data');
  }, $X);
  return count($Y) === 1 ? $Y[0] : $Y;
}
