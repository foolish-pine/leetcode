const uniqueOccurrences = (arr) => {
  const freq = {};
  const set = new Set();
  for (const value of arr) {
    freq[value] = (freq[value] || 0) + 1;
  }
  for (const value of freq) {
    set.add(value);
  }
  return map.size === set.size ? true : false;
};
