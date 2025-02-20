/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const mergeTwoLists = function(list1, list2) {
    // Create dummy node to handle edge cases
    let dummy = new ListNode(-1);
    let current = dummy;
    
    // While both lists have nodes
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    // If any list still has nodes, append them
    current.next = list1 || list2;
    
    return dummy.next;
};

// Test case setup
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Helper function to create linked list from array
function arrayToList(arr) {
    if (!arr.length) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert list to array for easy viewing
function listToArray(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// Test
const l1 = arrayToList([1,2,4]);
const l2 = arrayToList([1,3,4]);
console.log(listToArray(mergeTwoLists(l1, l2))); // Should output [1,1,2,3,4,4]