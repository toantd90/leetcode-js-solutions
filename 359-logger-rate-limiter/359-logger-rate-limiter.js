
var Logger = function() {
    this.messages = {}
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (!this.messages[message]) {
        this.messages[message] = timestamp + 10
        return true
    } else {
        if (timestamp >= this.messages[message]) {
            this.messages[message] = timestamp + 10
            return true
        } else {
            return false
        }
    }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */