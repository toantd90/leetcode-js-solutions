/**
 * @param {number} n
 */
var OrderedStream = function(n) {
  this.stream = new Array(n)
  this.lastReceive = -1
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
  this.stream[idKey - 1] = value
  
  if (this.lastReceive == idKey - 2) {
    let received = []
    while (this.stream[idKey - 1]) {
      received.push(this.stream[idKey - 1])
      idKey++
    }
    this.lastReceive = idKey - 2
    
    return received
  }
  
  return []
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */