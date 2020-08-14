const findPairs = (nums, k) => {
  let count = 0;
  nums.sort((a, b) => a - b);
  if (k === 0) {
    for (let i = 0, n; i < nums.length - 1; i++) {
      if (nums[i] === n) continue;
      if (nums[i] === nums[i + 1]) {
        count++;
        n = nums[i];
      }
    }
    return count;
  }
  const set = [...new Set(nums)];
  for (let i = 0; i < set.length; i++) {
    if (set.indexOf(set[i] + k) > i) count++;
  }
  return count;
};
