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
function deleteMiddle(head) {
  if (!head.next) return null
  
  let slow = head
  let fast = head.next.next
  
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  
  slow.next = slow.next.next
  
  return head
};