const moveZeroes = (nums) => {
  nums.forEach((value) => {
    if (value === 0) {
      nums.splice(nums.indexOf(value), 1);
      nums.push(0);
    }
  });
  return nums;
};
