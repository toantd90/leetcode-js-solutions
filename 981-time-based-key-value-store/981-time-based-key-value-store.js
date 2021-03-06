
var TimeMap = function() {
    this.timeMap = {}
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.timeMap[key]) this.timeMap[key] = []
    this.timeMap[key].push({ timestamp, value })
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.timeMap[key]) return ""
    
    const largestTimeStamp = this.getLargestTimeStamp(key, timestamp)
    
    return largestTimeStamp === null ? "" : largestTimeStamp.value
};
    
TimeMap.prototype.getLargestTimeStamp = function(key, timestamp) {
    let l = 0
    let r = this.timeMap[key].length - 1
    
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)
        
        if (this.timeMap[key][mid].timestamp > timestamp) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    
    return r !== -1 ? this.timeMap[key][r] : null
}

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */