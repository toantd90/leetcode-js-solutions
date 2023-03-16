/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function anagramMappings(nums1, nums2) {
  let numMap = {};

  nums1.forEach((num, index) => {
    if (!numMap[num]) {
      numMap[num] = [];
    }

    numMap[num].push(index);
  });

  let output = new Array(nums1.length).fill(-1);

  nums2.map((num, index) => {
    output[numMap[num].pop()] = index;
  });

  return output;
}
