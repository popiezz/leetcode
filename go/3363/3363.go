package main

import "fmt"

func maxCollectedFruits(fruits [][]int) int {
	p1, p2, p3 := 0, 0, 0
	for fruit := range fruits {
		fmt.Println(fruit)
	}
	fmt.Println(p1, p2, p3)
	return 0
}

func main() {
	fruits := [][]int{{1, 2, 3, 4}, {5, 6, 7, 8, 9}, {9, 10, 11, 12}, {13, 14, 15, 16}}
	fmt.Println("Max Collected Fruits :", maxCollectedFruits(fruits))
}
