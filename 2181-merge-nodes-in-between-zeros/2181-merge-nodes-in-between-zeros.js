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
const mergeNodes = head => {
    const dummy = new ListNode(-1, head)
    let cur = head.next
    let pre = dummy
    
    while (cur) {
        let sum = 0
        while (cur && cur.val) {
            sum += cur.val
            cur = cur.next
        }
        pre.next = new ListNode(sum, cur)
        pre = pre.next
        cur = cur?.next
    }
        
    pre.next = null
    
    return dummy.next
};