const thirdMax = (nums) => {
  const set = [...new Set(nums.sort((a, b) => b - a))];
  if (set.length > 2) {
    return set[2];
  } else {
    return set[0];
  }
};
