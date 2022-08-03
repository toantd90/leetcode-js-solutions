
var MyCalendar = function() {
  this.cal = [] 
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  this.cal.push([start, end])
  
  const sorted = [...this.cal].sort(([s1, e1], [s2, e2]) => s1 - s2)
  
  for (let i = 1; i < sorted.length; i++) {
    const prev = sorted[i-1]
    const curr = sorted[i]
    if(prev[1] > curr[0]){
      this.cal.pop()
      return false
    }
  }
  
  return true
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */