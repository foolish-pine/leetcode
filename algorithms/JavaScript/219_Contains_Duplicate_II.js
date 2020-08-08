const containsNearbyDuplicate = (nums, k) => {
  const set = new Set(nums);
  if (nums.length === set.size) return false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= k; j++) {
      if (nums[i] === nums[i + j]) return true;
    }
  }
  return false;
};

// another approach
const containsNearbyDuplicate = (nums, k) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (i - map[nums[i]] <= k) return true;
    map[nums[i]] = i;
  }
  return false;
};
