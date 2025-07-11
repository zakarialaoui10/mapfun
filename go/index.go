package main

import (
	"fmt"
	"math"
	"reflect"
)

// mapfun applies a callback function to each element within nested structures,
// supporting slices, arrays, and maps, while preserving the original structure.
func mapfun(callback func(float64) float64, data ...any) []any {
	result := make([]any, len(data))
	for i, item := range data {
		result[i] = mapfunRecursive(callback, item)
	}
	return result
}

// mapfunRecursive applies the callback to each element within the nested structure.
func mapfunRecursive(callback func(float64) float64, value any) any {
	val := reflect.ValueOf(value)

	switch val.Kind() {
	case reflect.Slice, reflect.Array:
		// Recursively map each element within the slice/array
		result := make([]any, val.Len())
		for i := 0; i < val.Len(); i++ {
			result[i] = mapfunRecursive(callback, val.Index(i).Interface())
		}
		return result
	case reflect.Map:
		// Recursively map each element within the map
		result := make(map[any]any)
		for _, key := range val.MapKeys() {
			result[key.Interface()] = mapfunRecursive(callback, val.MapIndex(key).Interface())
		}
		return result
	default:
		// Apply callback to numeric types
		switch v := value.(type) {
		case int:
			return callback(float64(v))
		case float64:
			return callback(v)
		default:
			return v // Return non-numeric types as-is
		}
	}
}

func main() {
	// Use math.Cos as the callback function
	callback := math.Cos

	// Define separate structures to be processed by mapfun
	a := []any{1, 2, 3, []any{4, 5}}
	b := map[string]any{
		"a": 6,
		"b": []any{7, 8, map[string]float64{"c": 9}},
	}
	c := 10.0

	// Apply mapfun with multiple arguments
	result := mapfun(callback, a, b, c)

	fmt.Println(result)
}
