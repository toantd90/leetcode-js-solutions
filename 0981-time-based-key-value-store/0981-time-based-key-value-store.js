
var TimeMap = function () {
    this.map = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (!this.map[key]) {
        this.map[key] = [];
    }

    this.map[key].push([value, timestamp]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    const values = this.map[key];

    if (!values) {
        return "";
    }

    return this.getValueByTimeStamp(values, timestamp);
};


TimeMap.prototype.getValueByTimeStamp = function (values, timestamp) {
    let l = 0;
    let r = values.length;

    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);

        if (values[mid][1] > timestamp) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return values[l - 1] ? values[l - 1][0] : "";
}



/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */