const singleNumber = (nums) => {
  let output = 0;
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }
  Object.entries(obj).forEach((value) => {
    if (value[1] === 1) output = value[0];
  });
  return output;
};

const singleNumber = (nums) => {
  return nums.reduce((a, b) => a ^ b);
};
