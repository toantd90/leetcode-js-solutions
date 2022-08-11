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
 * @return {boolean}
 */
const isValidBST = (root, min = null, max = null) => {
    if (!root) return true
    if ((min && root.val <= min) || (max && root.val >= max))
        return false
    if ((root.left && root.left.val >= root.val) || (root.right && root.right.val <= root.val)) {
        return false
    }
    
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
};