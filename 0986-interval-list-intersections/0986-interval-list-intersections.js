/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (list1, list2) {
  let index1 = 0;
  let index2 = 0;

  let result = [];

  while (index1 < list1.length && index2 < list2.length) {
    const [start1, end1] = list1[index1];
    const [start2, end2] = list2[index2];

    if (start1 > end2) {
      index2++;
    } else if (start2 > end1) {
      index1++;
    } else {
      if (start1 < start2) {
        if (end1 > end2) {
          result.push([start2, end2]);
          index2++;
        } else {
          result.push([start2, end1]);
          index1++;
        }
      } else {
        if (end1 > end2) {
          result.push([start1, end2]);
          index2++;
        } else {
          result.push([start1, end1]);
          index1++;
        }
      }
    }
  }

  return result;
};
