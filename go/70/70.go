package main

import "fmt"

func climbingStairs(steps int) int {
	if steps == 1 {
		return 1
	}
	if steps == 2 {
		return 2
	}
	first, second := 1, 2
	for i := 3; i <= steps; i++ {
		first, second = second, first+second
	}
	return second
}

func main() {
	steps := 5
	fmt.Println("Number of versions:", climbingStairs(steps))
}
