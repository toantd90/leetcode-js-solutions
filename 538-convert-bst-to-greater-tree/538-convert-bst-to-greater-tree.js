

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
 * @return {TreeNode}
 */
const convertBST = root => {
    let sum = 0
    
    const revertedPostOrderTreeTraverse = node => {
        if (!node) return
        revertedPostOrderTreeTraverse(node.right)
        sum = node.val = sum + node.val
        revertedPostOrderTreeTraverse(node.left)
    }
    
    revertedPostOrderTreeTraverse(root)
    
    return root
    
};