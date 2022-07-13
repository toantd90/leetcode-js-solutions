/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = nums => {
  const n = nums.length
  if (n == 0) return 0
  if (n == 1) return nums[0]
  if (n == 2) return Math.max(nums[0], nums[1])

  let f1 = nums[0], f2 = 0
  let s1 = nums[1], s2 = 0
  
  for (let i = 2; i < n; i++) {
    const t1 = f1
    f1 = Math.max(f2 + nums[i - 1], f1)
    f2 = t1
    const t2 = s1
    s1 = Math.max(s2 + nums[i], s1)
    s2 = t2
  }
  
  return Math.max(f1, s1)
};