const inorderTraverse = (node, kSmallestElements, k) => {
    if (!node || kSmallestElements.length === k) return
    
    inorderTraverse(node.left, kSmallestElements, k)
    kSmallestElements.push(node.val)
    inorderTraverse(node.right, kSmallestElements, k)
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
    let kSmallestElements = []
    
    inorderTraverse(root, kSmallestElements, k)
    
    return kSmallestElements[k - 1]
};