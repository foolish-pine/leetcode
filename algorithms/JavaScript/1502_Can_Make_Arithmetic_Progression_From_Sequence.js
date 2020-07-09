const canMakeArithmeticProgression = (arr) => {
  arr.sort((a, b) => a - b);
  const diffs = new Set();
  arr.reduce((a, b) => {
    diffs.add(b - a);
    return b;
  });

  return diffs.size === 1 ? true : false;
};
