const getKth = (lo, hi, k) => {
  const map = new Map();
  for (let i = lo; i <= hi; i++) {
    let value = i;
    let power = 0;
    while (value > 1) {
      if (value % 2 === 0) {
        power++;
        value /= 2;
      } else {
        power++;
        value = 3 * value + 1;
      }
    }
    map.set(i, power);
  }
  const sortedMap = [...map.entries()].sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  return sortedMap[k - 1][0];
};
