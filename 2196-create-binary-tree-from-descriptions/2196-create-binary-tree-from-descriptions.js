/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const buildTree = (node, nodeMap) => {
    const nodeVal = node.val
    if (!nodeMap[nodeVal]) return
    const leftNodeVal = nodeMap[nodeVal][0]
    const rightNodeVal = nodeMap[nodeVal][1]
    
    if (leftNodeVal) {
        node.left = new TreeNode(leftNodeVal)
        buildTree(node.left, nodeMap)
    }
    
    if (rightNodeVal) {
        node.right = new TreeNode(rightNodeVal)
        buildTree(node.right, nodeMap)
    }
} 
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
const createBinaryTree = descriptions => {
    let childs = []
    let parents = new Set()
    let nodeMap = {}
    
    // [parenti, childi, isLefti]
    for (let [parent, child, isLeft] of descriptions) {
        childs.push(child)
        parents.add(parent)
        if (!nodeMap[parent])
            nodeMap[parent] = new Array(2).fill(null)
        if (isLeft === 1) {
            nodeMap[parent][0] = child
        } else {
            nodeMap[parent][1] = child
        }
    }
    
    const rootValue = Array.from(parents).filter(parent => !childs.includes(parent))[0]
    const root = new TreeNode(rootValue)
    buildTree(root, nodeMap)
    
    return root
};