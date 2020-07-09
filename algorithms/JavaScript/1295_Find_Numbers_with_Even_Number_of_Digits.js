const findNumbers = (nums) => {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    const digit = String(nums[i]).split("").length;
    if (digit % 2 === 0) result++;
  }
  return result;
};
