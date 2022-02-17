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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSameTree = (first, second) => {
    if (!first && !second) return true
    if (!first || !second) return false
    if (first.val !== second.val) return false
    
    return isSameTree(first.left, second.left) && isSameTree(first.right, second.right)
}
const isSubtree = (root, subRoot) => {
    let queue = [root]
    let sameValueNodes = []
    while (queue.length) {
        const node = queue.shift()
        if (node.val === subRoot.val) sameValueNodes.push(node)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    
    for (const node of sameValueNodes) {
        const isSame = isSameTree(node, subRoot)
        if (isSame) return true
    }
    
    return false
};