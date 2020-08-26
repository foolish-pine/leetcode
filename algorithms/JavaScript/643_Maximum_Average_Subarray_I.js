const findMaxAverage = (nums, k) => {
  let max = nums.slice(0, k).reduce((a, b) => a + b);
  for (let i = 1; i < nums.length - k + 1; i++) {
    const sum = nums.slice(i, i + k).reduce((a, b) => a + b);
    if (sum > max) max = sum;
  }
  return max / k;
};
