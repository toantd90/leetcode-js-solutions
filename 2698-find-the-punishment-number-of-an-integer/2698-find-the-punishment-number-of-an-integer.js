function isPunishmentNumber(num, target) {
  const numStr = num.toString();
  const n = numStr.length;

  for (let i = 0; i < 1 << (n - 1); i++) {
    let sum = 0;
    let currNum = parseInt(numStr.charAt(0));
    for (let j = 1; j < n; j++) {
      if (i & (1 << (j - 1))) {
        sum += currNum;
        currNum = 0;
      }
      currNum = currNum * 10 + parseInt(numStr.charAt(j));
    }
    sum += currNum;

    if (sum === target) {
      return true;
    }
  }

  return false;
}

function punishmentNumber(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (isPunishmentNumber(i * i, i)) {
      result += i * i;
    }
  }
  return result;
}
