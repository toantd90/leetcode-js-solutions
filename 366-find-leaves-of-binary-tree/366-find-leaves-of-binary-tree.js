/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


const getHeight = node => {
    if (!node || (!node.left && !node.right)) return 0
    
    return Math.max(getHeight(node.left) + 1, getHeight(node.right) + 1)
}


/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const findLeaves = root => {
    let res = []
    
    const getHeight = node => {
        if (!node) return -1
    

        const height = Math.max(getHeight(node.left) + 1, getHeight(node.right) + 1)
        
        if (!res[height]) res[height] = []
            res[height].push(node.val)
        return height
    }
    
    getHeight(root)
    
    return res
};