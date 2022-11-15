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
// const countNodes = function(root) {
//     if (!root) return 0;
//     let queue = [root];
//     let nodeCount = 0;
    
//     while (queue.length) {
//         const node = queue.shift();
//         nodeCount++;
//         if (node.left) {
//             queue.push(node.left);
//         }
        
//         if (node.right) {
//             queue.push(node.right);
//         }
//     }
    
//     return nodeCount;
// };

// const countNodes = function (root) {
//     if (!root) return 0;
//     return 1 + countNodes(root.left) + countNodes(root.right);
// }

const countNodes = function (root) {
    if (!root) return 0;
    
    const heightRight = height(root.right);
    const nodesOfFullTree = countNodesFullTree(heightRight);
    
    return height(root) === heightRight + 1 ? 1 + countNodes(root.right) +  nodesOfFullTree  : 1 + countNodes(root.left) + nodesOfFullTree;
}

const height = function (node) {
    if (!node) return 0;
    return 1 + height(node.left);
}

const countNodesFullTree = function (height) {
    return Math.pow(2, height) - 1;
}

