package main

import (
	"fmt"
	"slices"
)

func removeElements(nums []int, val int) int {
	for i := 0; i < len(nums); i++ {
		fmt.Printf("Nums at index %d is: %d\n", i, nums[i])
		if nums[i] == val {
			nums = slices.Delete(nums, i, i+1)
			fmt.Printf("Nums after delete: %v\n", nums)
			i--
		}
	}
	fmt.Printf("Size of nums before return: %d\n", len(nums))
	return len(nums)
}

func main() {
	nums := []int{2, 3, 3, 2}
	val := 3
	removeElements(nums, val)
}
