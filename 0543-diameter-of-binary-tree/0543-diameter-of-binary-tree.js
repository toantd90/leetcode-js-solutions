/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (!root) return 0;
    let max = 0;
    
    const getDepth = function (node) {
        if (!node) return 0;
        
        const maxLeft = getDepth(node.left);
        const maxRight = getDepth(node.right);
        
        max = Math.max(max, maxLeft + maxRight);
        
        return Math.max(maxLeft, maxRight) + 1;
    }
    
    getDepth(root);
    
    return max;
    
};