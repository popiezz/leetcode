package main

import (
	"fmt"
	"math"
)

func searchInsert(nums []int, target int) int {
	left, right := 0, len(nums)-1
	for left <= right {
		mid := left + int(math.Floor(float64((right-left)/2)))
		if nums[mid] == target {
			return mid
		}
		if target < nums[mid] {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}
	return left
}

func main() {
	nums := []int{1, 2, 3, 4, 5, 7, 8, 9}
	target := 6
	fmt.Println("Target is at index:", searchInsert(nums, target))
}
