
var DetectSquares = function() {
    this.points = {}
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function([x, y]) {
    if (!this.points[x]) {
        this.points[x] = {[y] : 1}   
    } else {
        this.points[x][y] = (this.points[x][y] || 0) + 1    
    }
}
    

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function([x, y]) {
    let cnt = 0
    
    for (let x3 in this.points) {
        console.log(x3)
        const diffX = Math.abs(x-x3)
        if (this.points[x] && diffX !== 0) {
            // up
            let y3 = y + diffX
            
            cnt += (this.points[x3][y3] || 0) * (this.points[x][y3] || 0) * (this.points[x3][y] || 0)
            
            y3 = y - diffX
            
            cnt += (this.points[x3][y3] || 0) * (this.points[x][y3] || 0) * (this.points[x3][y] || 0)
        } 
    }
        
    return cnt
};

/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */