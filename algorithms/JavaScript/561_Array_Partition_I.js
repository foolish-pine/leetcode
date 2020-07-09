const arrayPairSum = (nums) => {
  return (nums = nums
    .sort((a, b) => a - b)
    .filter((value, index) => index % 2 === 0)
    .reduce((a, b) => a + b));
};
