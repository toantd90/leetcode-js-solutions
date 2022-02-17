/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
const findNextNode = node => {
    if (!node) return null
    if (node.left) return node.left
    if (node.right) return node.right
    return findNextNode(node.next)
}

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = (node) => {
  if (!node) return node

  if (node.right) node.right.next = findNextNode(node.next)
  if (node.left) node.left.next = node.right || findNextNode(node.next)
  
  connect(node.right)
  connect(node.left)

  return node;
};
