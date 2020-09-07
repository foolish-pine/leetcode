// Runtime: 624ms
const findDuplicate = (nums) => {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr.push(i);
  }
  for (const num of nums) {
    if (arr.includes(num)) {
      arr.splice(arr.indexOf(num), 1);
    } else {
      return num;
    }
  }
};

// faster solution Runtime: 76ms
const findDuplicate = (nums) => {
  for (let n of nums) {
    if (nums[Math.abs(n)] < 0) return Math.abs(n);
    nums[Math.abs(n)] *= -1;
  }
  return -1;
};
