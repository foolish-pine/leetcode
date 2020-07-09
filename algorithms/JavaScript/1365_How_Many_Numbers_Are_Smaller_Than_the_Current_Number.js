const smallerNumbersThanCurrent = (nums) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const smallerNums = nums.filter((value) => value < nums[i]);
    result.push(smallerNums.length);
  }
  return result;
};
