/**
 * @param {Function} fn
 */
function memoize(fn) {
  let callCount = 0;
  let memoized = {};
  return function (...args) {
    if (!args) {
      return callCount;
    }

    let key = args.reduce((acc, arg) => acc + '-' + arg, "");

    if (memoized[key] === undefined) {
      memoized[key] = fn(...args);
      callCount++;
    }

    return memoized[key];
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
