const dominantIndex = (nums) => {
  if (nums.length === 1) return 0;
  const sortedArr = Array.from(nums).sort((a, b) => b - a);
  return sortedArr[0] >= sortedArr[1] * 2 ? nums.indexOf(sortedArr[0]) : -1;
};
