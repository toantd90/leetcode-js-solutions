/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
    if (!head) return true;
    
    const middle = findMiddle(head);
    let reverse = reverseList(middle);
    
    while (reverse) {
        if (reverse.val !== head.val) return false;
        reverse = reverse.next;
        head = head.next;
    }
    
    return true;
};

const reverseList = function (node) {
    let previous = null;
    while (node) {
        const temp = node.next;
        node.next = previous;
        previous = node;
        node = temp;
    }
    
    return previous;
}

const findMiddle = function (node) {
    let fast = node;
    let slow = node;
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    return slow;
}