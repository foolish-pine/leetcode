const findLHS = (nums) => {
  let maxLength = 0;
  nums.sort((a, b) => a - b);
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      const LHS = nums.filter((x) => x === nums[i] || x === nums[i - 1]);
      if (LHS.length > maxLength) maxLength = LHS.length;
    }
  }
  return maxLength;
};
