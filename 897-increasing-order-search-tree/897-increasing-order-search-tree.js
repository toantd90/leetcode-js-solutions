const inorderTraverse = (node, nodesInOrder) => {
    if (!node) return
    if (node.left) inorderTraverse(node.left, nodesInOrder)
    nodesInOrder.push(node.val)
    if (node.right) inorderTraverse(node.right, nodesInOrder)
}

const buildTreeFromNodes = nodes => {
    let root = new TreeNode(nodes[0])
    let currentNode = root
    for (let i = 1; i < nodes.length; i++) {
        const nextNode = new TreeNode(nodes[i])
        currentNode.right = nextNode
        currentNode = nextNode
    }
    
    return root
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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let nodesInOrder = []
    inorderTraverse(root, nodesInOrder)
    
    let newRoot = buildTreeFromNodes(nodesInOrder)
    return newRoot
};