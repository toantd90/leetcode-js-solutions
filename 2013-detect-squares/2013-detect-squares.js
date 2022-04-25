
var DetectSquares = function() {
    this.points = []
    this.cntPoints = new Array(1001).fill().map(_ => new Array(1001).fill(0))
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function([x, y]) {
    this.points.push([x, y])
    this.cntPoints[x][y]++
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function([x, y]) {
    let cnt = 0
    for (let [x3, y3] of this.points) {
        
        if (Math.abs(x-x3) !== 0 && Math.abs(x - x3) === Math.abs(y - y3) && this.cntPoints[x][y3] && this.cntPoints[x3][y]) {
            cnt += this.cntPoints[x][y3] * this.cntPoints[x3][y]
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