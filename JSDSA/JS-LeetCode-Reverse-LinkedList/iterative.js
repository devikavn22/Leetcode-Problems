/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }

  return prev;
};

/* 
 Time Complexity: O(n) - Although the recursive solution looks like it might be O(n^2) due to the 
 recursive call within the loop, the recursive calls are tail-recursive. In many JavaScript environments, 
 the tail call is optimized, effectively making it O(n).
Space Complexity: O(n) - The space complexity is O(n) due to the recursive call stack. In the worst case, 
the maximum depth of the call stack would be n (the number of nodes in the linked list)
 */
