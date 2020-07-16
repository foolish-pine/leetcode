const searchInsert = (nums, target) => {
  nums.push(target);
  return nums.sort((a, b) => a - b).indexOf(target);
};
