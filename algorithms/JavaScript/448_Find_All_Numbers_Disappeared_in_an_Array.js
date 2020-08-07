const findDisappearedNumbers = (nums) => {
  const output = [];
  for (let i = 1; i <= nums.length; i++) {
    if (nums.indexOf(i) === -1) output.push(i);
  }
  return output;
};
