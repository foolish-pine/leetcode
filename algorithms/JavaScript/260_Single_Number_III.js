// Runtime: 456ms
const singleNumber = (nums) => {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i]))
      answer.push(nums[i]);
  }
  return answer;
};

// using Map() Runtime: 84ms
const singleNumber = (nums) => {
  let map = new Map();
  for (let num of nums) {
    map.has(num) ? map.delete(num) : map.set(num, 1);
  }
  return [...map.keys()];
};
