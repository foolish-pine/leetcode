// 1680ms Runtime
const findMaxAverage = (nums, k) => {
  let max = nums.slice(0, k).reduce((a, b) => a + b);
  for (let i = 1; i < nums.length - k + 1; i++) {
    const sum = nums.slice(i, i + k).reduce((a, b) => a + b);
    if (sum > max) max = sum;
  }
  return max / k;
};

// faster solution 92ms Runtime
const findMaxAverage = (nums, k) => {
  let sum = 0;
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (i >= k - 1) {
      max = Math.max(max, sum / k);
      sum -= nums[i - k + 1];
    }
  }

  return max;
};
