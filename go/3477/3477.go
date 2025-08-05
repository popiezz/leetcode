package main

import (
	"fmt"
	"slices"
)

func numOfUnplacedFruits(fruits []int, baskets []int) int {
	var placed []int
	for _, fruit := range fruits {
		for i := 0; i < len(baskets); i++ {
			if fruit <= baskets[i] {
				placed = append(placed, fruit)
				baskets = slices.Delete(baskets, i, i+1)
				fmt.Printf("Baskets length after removal of index : %d\n", len(baskets))
				break
			}
		}
	}
	return len(fruits) - len(placed)
}

func main() {
	fruits := []int{4, 2, 5}
	baskets := []int{3, 5, 4}
	numOfUnplacedFruits(fruits, baskets)
}
