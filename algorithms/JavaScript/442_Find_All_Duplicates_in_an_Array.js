const findDuplicates = (nums) => {
  const output = [];
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] - nums[i] === 0) output.push(nums[i]);
  }
  return output;
};
