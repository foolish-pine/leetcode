const addDigits = (num) => {
  while (String(num).length > 1) {
    num = String(num)
      .split("")
      .map((x) => Number(x))
      .reduce((a, b) => a + b);
  }
  return num;
};

// amazing pne-liner
const addDigits = (num) => {
  return ((num - 1) % 9) + 1;
};
