const isHappy = (n) => {
  let nums = [];
  let digits = String(n)
    .split("")
    .map((digit) => Number(digit));
  let sum = 0;
  while (sum !== 1) {
    sum = digits.reduce((a, b) => {
      return a + b ** 2;
    }, 0);
    if (nums.includes(sum)) return false;
    nums.push(sum);
    digits = String(sum)
      .split("")
      .map((digit) => Number(digit));
  }
  return sum === 1;
};
