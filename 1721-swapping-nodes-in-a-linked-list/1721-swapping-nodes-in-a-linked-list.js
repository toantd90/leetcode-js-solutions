/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = (head, k) => {
    let left = head
    for (let i = 1; i < k; i++) {
        left = left.next
    }
    
    let temp = left
    let right = head
    
    while (temp && temp.next) {
        right = right.next
        temp = temp.next
    }
    
   
    const tempVal = left.val
    left.val = right.val
    right.val = tempVal
    
    return head
};