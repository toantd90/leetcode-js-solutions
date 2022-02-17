/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} firstTree
 * @param {TreeNode} secondTree
 * @return {boolean}
 */
const isSameTree = (first, second) => {
    // if two nodes are both null then they are leaves
    if (!first && !second) return true
    // if only one of two nodes is null then we found one node and one leave. That is false
    if (!first || !second) return false
    // if both nodes are not null, but have different values. That is false
    if (first.val !== second.val) return false
    
    // Node values are equal now. We need to check the left sub tree and the right sub tree
    return isSameTree(first.left, second.left) && isSameTree(first.right, second.right)
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = (root, subRoot) => {
    let queue = [root]
    let sameValueNodes = []
    while (queue.length) {
        const node = queue.shift()
        // Add the node to an array of same value nodes to check just in case we have duplication in node value
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