/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let calledTimes = 0;
  return function (...args) {
    calledTimes++;
    if (calledTimes > 1) {
      return undefined;
    } else {
      return fn(...args);
    }
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
