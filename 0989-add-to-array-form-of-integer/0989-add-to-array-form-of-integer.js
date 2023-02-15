var addToArrayForm = function (num, k) {
  let i = num.length - 1;
  let res = [];
  while (i >= 0 || k > 0) {
    //this is the general check : taking the last elemnt and adding it with the k value then take the carry(if any to the next iteration)
    if (i >= 0) {
      res.push((num[i] + k) % 10);
      k = Math.trunc((num[i] + k) / 10);
      i--;
    }
    //this else block will handle the edge case when we need to increase the array length based on k value
    else {
      res.push(k % 10);
      k = Math.trunc(k / 10);
    }
  }
  return res.reverse();
};
