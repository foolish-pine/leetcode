const repeatedNTimes = (A) => {
  const map = new Map();
  for (const value of A) {
    if (map.has(value)) {
      return value;
    } else {
      map.set(value, 1);
    }
  }
};
