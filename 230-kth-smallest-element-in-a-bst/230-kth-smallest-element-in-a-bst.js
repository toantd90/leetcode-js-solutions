const inorderTraverse = (node, kSmallestElements, k) => {
    if (!node) return node
    
    if (node.left) inorderTraverse(node.left, kSmallestElements, k)
    kSmallestElements.push(node.val)
    if (node.right) inorderTraverse(node.right, kSmallestElements, k)
    
    return kSmallestElements
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
    let nodes = []
    
    inorderTraverse(root, nodes, k)
    
    return nodes[k - 1]
};