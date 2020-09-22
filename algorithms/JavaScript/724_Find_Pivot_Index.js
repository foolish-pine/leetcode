const pivotIndex = (nums) => {
  if (nums.length < 3) return -1;

  let leftSum = 0;
  let rightSum = nums.slice(1, nums.length).reduce((a, b) => a + b);
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === rightSum) return i;
    leftSum += nums[i];
    rightSum -= nums[i + 1];
  }
  return -1;
};
