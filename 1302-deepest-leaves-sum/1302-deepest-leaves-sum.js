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
 * @return {number}
 */
const deepestLeavesSum = root => {
    let queue = [root]
    let leavesSum = 0
    
    while (queue.length) {
        const size = queue.length
        let curSum = 0
        
        for (let i = 0; i < size; i++) {
            const node = queue.shift()
            curSum += node.val
            
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        
        leavesSum = curSum
    }
    
    return leavesSum
};