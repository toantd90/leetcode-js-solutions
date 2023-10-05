/**
 * @param {number[]} nums
 * @return {number[]}
 */
function majorityElement(nums) {
  const count = {};

  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  const keyValues = Object.entries(count);
  const oneThirdCount = nums.length / 3;
  let elements = [];

  for (let i = 0; i < keyValues.length; i++) {
    const [key, value] = keyValues[i];

    if (value > oneThirdCount) {
      elements.push(key);
    }

    if (elements.length === 2) {
      break;
    }
  }

  return elements;
}
