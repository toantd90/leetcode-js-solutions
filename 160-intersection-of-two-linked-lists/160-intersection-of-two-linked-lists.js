/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// var getIntersectionNode = function(headA, headB) {
//     let lenA = getLength(headA), lenB = getLength(headB);
//     while (lenA < lenB) {
//         headB = headB.next;
//         lenB--;
//     }
    
//     while (lenA > lenB) {
//         headA = headA.next;
//         lenA--;
//     }
    
//     while (headA !== headB) {
//         headA = headA.next;
//         headB = headB.next;
//     }
    
//     return headA;
// };

// const getLength = head => {
//     let length = 0;
//     while (head) {
//         head = head.next;
//         length++;
//     }
//     return length;
// }

var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    let a = headA;
    let b = headB;
    
    while (a !== b) {
        a = !a ? headB : a.next;
        b = !b ? headA : b.next;
    }
    
    return a;
}