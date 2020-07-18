const findLengthOfLCIS = (nums) => {
  if (nums.length === 0) return 0;
  let max = 0;
  let output = [nums[0]];
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      output.push(nums[i]);
    } else {
      if (max < output.length) max = output.length;
      output = [nums[i]];
    }
  }
  if (max < output.length) max = output.length;
  return max;
};
