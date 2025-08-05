package main

import "fmt"

// determine the length of needle
// if the first letter of needle matches a letter of haystack, create a new string of haystack[i:i+len(needle)]
// check if needle matches that new string, if yes return 'i'

func strStr(needle, haystack string) int {
	nSlice := []rune(needle)
	hSlice := []rune(haystack)
	for i := 0; i < len(hSlice); i++ {
		if nSlice[0] == hSlice[i] && len(nSlice) <= len(hSlice[i:]) {
			if string(nSlice) == string(hSlice[i:i+len(nSlice)]) {
				return i
			}
		}
	}
	return -1
}

func main() {
	needle := "abbbaababbbabbbabbbbbabaaaaaaabaabaabbbbaabab"
	haystack := "abbbbbaabbaabaabbbaaaaabbabbbabbbbbaababaabbaabbbbbababaababbbbaaabbbbabaabaaaabbbbabbbaabbbaabbaaabaabaaaaaaaa"
	fmt.Println("Instance", strStr(needle, haystack))
}
