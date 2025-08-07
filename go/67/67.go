package main

import (
	"fmt"
	"strconv"
)

func addBinary(a string, b string) string {
	c, _ := strconv.ParseInt(a, 2, 64)
	d, _ := strconv.ParseInt(b, 2, 64)
	e := c + d
	f := string(strconv.FormatInt(e, 2))
	return f
}

func main() {
	fmt.Println(addBinary("11", "1"))
	fmt.Println(addBinary("1010", "1011"))
}
