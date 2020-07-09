const xorOperation = (n, start) => {
  const nums = [];
  for (let i = 0; i < n; i++) {
    nums[i] = start + 2 * i;
  }
  const result = nums.reduce((a, b) => a ^ b);
  return result;
};
