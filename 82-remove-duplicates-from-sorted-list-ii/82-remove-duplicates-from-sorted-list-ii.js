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
const deleteDuplicates = head => {
    let dummy = new ListNode(null, head)
    let pre = dummy
    
    while (head) {
       
        if (head.next && head.val === head.next.val) {
            while (head.next && head.val === head.next.val) {
                head = head.next
            }
            pre.next = head.next
        } else {
            pre = pre.next
        }
        
        head = head.next
    }
    
    return dummy.next
};