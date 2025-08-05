package main

import (
	"fmt"
)

func plusOne(digits []int) []int {
	n := len(digits)
	for i := n - 1; i >= 0; i-- {
		if digits[i] < 9 {
			digits[i]++
			return digits
		}
		digits[i] = 0
	}
	result := make([]int, n+1)
	result[0] = 1
	return result
}

func main() {
	digits1 := []int{1, 2, 3}
	digits2 := []int{4, 3, 2, 1}
	digits3 := []int{9}
	digits4 := []int{9, 9}
	fmt.Println(plusOne(digits1))
	fmt.Println(plusOne(digits2))
	fmt.Println(plusOne(digits3))
	fmt.Println(plusOne(digits4))
}
