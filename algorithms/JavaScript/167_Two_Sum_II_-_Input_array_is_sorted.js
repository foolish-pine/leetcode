const twoSum = (numbers, target) => {
  const map = {};
  for (let i = 1; i <= numbers.length; i++) {
    if (map[numbers[i - 1]]) return [map[numbers[i - 1]], i];
    map[target - numbers[i - 1]] = i;
  }
};
