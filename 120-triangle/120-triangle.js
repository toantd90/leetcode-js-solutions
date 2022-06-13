/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let min = triangle[0][0]    
    for (let i = 1; i < triangle.length; i++) {
        let curMin = 1e4 + 1
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.min(triangle[i - 1][j] !== undefined ? triangle[i - 1][j] : 1e4 + 1, triangle[i - 1][j - 1] !== undefined  ? triangle[i - 1][j - 1] : 1e4 + 1)
            curMin = Math.min(curMin, triangle[i][j])
        }
        
        min = curMin
    }
    
    console.log(triangle)
    
    return min
};