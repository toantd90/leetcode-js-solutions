var TimeLimitedCache = function () {
  this.cache = {};
  this.countKeys = 0;
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  let isExist = false;
  if (this.cache[key] !== undefined) {
    clearTimeout(this.cache[key].timeoutId);
    this.countKeys--;
    isExist = true;
  } else {
    this.cache[key] = {};
  }
  this.cache[key].value = value;
  this.countKeys++;

  let timeoutId = setTimeout(() => {
    this.cache[key] = -1;
    this.countKeys--;
  }, duration);

  this.cache[key].timeoutId = timeoutId;
  return isExist;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  return this.cache[key]?.value || -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.countKeys;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
