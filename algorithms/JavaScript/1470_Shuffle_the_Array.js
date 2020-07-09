const shuffle = (nums, n) => {
  let shuffledNums = [];
  for (let i = 0; i < n; i++) {
    shuffledNums.push(nums[i]);
    shuffledNums.push(nums[i + n]);
  }
  return shuffledNums;
};
