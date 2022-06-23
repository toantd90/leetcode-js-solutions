/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size
    this.sum = 0
    this.stream = []
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.stream.push(val)
    this.sum += val
    
    if (this.stream.length > this.size) {
        this.sum -= this.stream.shift()
    }
    
    return this.sum / this.stream.length
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */