package main

import (
	"fmt"
	"strings"
)

func lengthOfLastWord(s string) int {
	p := strings.Split(s, " ")
	for i := len(p) - 1; i >= 0; i-- {
		if p[i] != "" {
			return len(p[i])
		}
	}
	return 0
}

func main() {
	s := "   fly me   to   the moon  "
	fmt.Printf("Length of last word of string '%s' is: %d\n", s, lengthOfLastWord(s))
}
