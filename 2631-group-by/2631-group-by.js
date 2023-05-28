/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
  let groupedBy = {};
  for (let element of this) {
    if (!groupedBy[fn(element)]) {
      groupedBy[fn(element)] = [];
    }

    groupedBy[fn(element)].push(element);
  }

  return groupedBy;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
