const countLargestGroup = function (n) {
  const map = new Map();
  for (let i = 1; i <= n; i++) {
    let digit = 0;
    let sum = 0;
    let value = i;
    while (value) {
      digit = value % 10;
      sum += digit;
      value = Math.floor(value / 10);
    }
    map.has(sum) ? map.set(sum, map.get(sum) + 1) : map.set(sum, 1);
  }
  const max = Math.max(...map.values());
  let count = 0;
  for (const value of map.values()) {
    if (max === value) count++;
  }
  return count;
};
