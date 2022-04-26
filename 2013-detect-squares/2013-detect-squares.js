
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

DetectSquares.prototype.squareCount = function(x, y, x1, y1) {
    return (this.points[x1][y1] || 0) * (this.points[x][y1] || 0) * (this.points[x1][y] || 0)
}
    

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function([x, y]) {
    let cnt = 0
    
    for (let x1 in this.points) {
        const diffX = Math.abs(x-x1)
        if (this.points[x] && diffX !== 0) {
            cnt += this.squareCount(x, y, x1, y + diffX) + this.squareCount(x, y, x1, y - diffX)
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