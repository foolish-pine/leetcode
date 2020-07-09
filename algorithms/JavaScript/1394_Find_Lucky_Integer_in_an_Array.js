const findLucky = (arr) => {
  const map = new Map();
  for (const value of arr) {
    map.has(value) ? map.set(value, map.get(value) + 1) : map.set(value, 1);
  }
  return Math.max(...arr.filter((value) => value === map.get(value)), -1);
};
