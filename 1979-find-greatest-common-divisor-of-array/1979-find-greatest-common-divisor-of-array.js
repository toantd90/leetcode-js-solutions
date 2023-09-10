const gcd = (a, b) => (b == 0 ? a : gcd(b, a % b));

const findGCD = (a) => {
  let max = Math.max.apply(Math, a);
  let min = Math.min.apply(Math, a);
  return gcd(min, max);
};
