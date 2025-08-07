package main

import (
	"fmt"
)

func mySqrt(target int) int {
	// base cases
	if target == 0 {
		return 0
	}
	if target == 1 {
		return 1
	}
	left, right := 1, target

	for left <= right {
		mid := left + (right-left)/2
		sqrt := mid * mid
		if sqrt == target {
			return mid
		} else if sqrt < target {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
	return right
}

func main() {
	num := 8
	fmt.Println(mySqrt(num))
}
