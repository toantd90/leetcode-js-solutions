/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  const dummy = new ListNode();
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;
  let i = 0;
  while (i <= n) {
    fast = fast.next;
    i++;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
}
