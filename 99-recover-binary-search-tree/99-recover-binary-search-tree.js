

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    if (!root) return root
    
    let prev = new TreeNode(Number.MIN_SAFE_INTEGER)
    let first, second


    const inorderTraverse = node => {
        if (!node) return

        inorderTraverse(node.left)

        if (node.val < prev.val) {
            if (!first) {
                first = prev
            }

            second = node
        }

        prev = node

        inorderTraverse(node.right)
    }
    
    inorderTraverse(root)
    
    const temp = first.val
    first.val = second.val
    second.val = temp
    
    return root
};