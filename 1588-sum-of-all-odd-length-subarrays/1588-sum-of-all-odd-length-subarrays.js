/**
 * @param {number[]} arr
 * @return {number}
 */
function sumOddLengthSubarrays (arr) {
  const n = arr.length;
  let answer = 0;

  for (let i = 0; i < n; ++i) {
    let left = i,
      right = n - i - 1;
    answer += arr[i] * (Math.floor(left / 2) + 1) * (Math.floor(right / 2) + 1);
    answer += arr[i] * Math.floor((left + 1) / 2) * Math.floor((right + 1) / 2);
  }

  return answer;
};
