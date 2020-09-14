const sumFourDivisors = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    const divs = [1, nums[i]];
    for (let j = 2; j <= Math.floor(nums[i] / 2); j++) {
      if (nums[i] % j === 0) divs.push(j);
      if (divs.length === 5) break;
    }
    if (divs.length === 4) {
      for (const div of divs) {
        sum += div;
      }
    }
  }
  return sum;
};
