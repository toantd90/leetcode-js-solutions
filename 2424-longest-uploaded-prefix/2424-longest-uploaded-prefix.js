/**
 * @param {number} n
 */
var LUPrefix = function(n) {
  this.uploadedVideos = new Array(n + 1).fill(false)
  this.uploadedVideos[0] = true
  this.largestUploaded = 0
};

/** 
 * @param {number} video
 * @return {void}
 */
LUPrefix.prototype.upload = function(video) {
  this.uploadedVideos[video] = true
};

/**
 * @return {number}
 */
LUPrefix.prototype.longest = function() {
  for (let i = this.largestUploaded + 1; i < this.uploadedVideos.length; i++) {
    if (!this.uploadedVideos[i]) {
      this.largestUploaded = Math.max(this.largestUploaded, i - 2)
      return i - 1
    }
  }
  
  return this.uploadedVideos.length - 1
};

/** 
 * Your LUPrefix object will be instantiated and called as such:
 * var obj = new LUPrefix(n)
 * obj.upload(video)
 * var param_2 = obj.longest()
 */