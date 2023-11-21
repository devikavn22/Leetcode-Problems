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
  if (head === null || head.next === null) {
    return head;
  }

  let reversedList = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return reversedList;
};

/* 
Time Complexity: O(n) - where n is the number of nodes in the linked list. We iterate through each node once.
Space Complexity: O(1) - We use a constant amount of extra space regardless of the size of the input.
   
   */
