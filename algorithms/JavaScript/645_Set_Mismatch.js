const findErrorNums = (nums) => {
  const map = {};
  for (let i = 1; i <= nums.length; i++) {
    map[i] = 1;
  }
  for (const num of nums) {
    map[num]--;
  }
  const arr = Object.keys(map).map((key) => ({ key: key, value: map[key] }));
  return [
    arr.find((element) => element.value === -1).key,
    arr.find((element) => element.value === 1).key,
  ];
};
