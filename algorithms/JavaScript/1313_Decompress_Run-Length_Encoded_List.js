const decompressRLElist = (nums) => {
  let result = [];
  for (let i = 0; i < nums.length / 2; i++) {
    const arr = [];
    for (let j = 0; j < nums[2 * i]; j++) {
      result.push(nums[2 * i + 1]);
    }
  }
  return result;
};
