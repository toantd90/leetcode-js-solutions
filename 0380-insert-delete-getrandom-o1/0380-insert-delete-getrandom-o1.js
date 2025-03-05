
var RandomizedSet = function () {
    this.set = {}
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.set[val] !== undefined) {
        return false;
    } else {
        this.set[val] = val;
        return true
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.set[val] === undefined) {
        return false;
    } else {
        delete this.set[val];
        return true;
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const max = Object.keys(this.set).length;
    const randomIndex = getRandomInt(max);

    return Object.values(this.set)[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */