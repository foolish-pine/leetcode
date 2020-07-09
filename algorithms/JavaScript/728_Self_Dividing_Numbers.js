const selfDividingNumbers = (left, right) => {
  const arr = [];
  const output = [];
  for (let i = left; i <= right; i++) {
    arr.push(i);
  }
  for (let value of arr) {
    const digits = [];
    let x = value;
    while (x > 0) {
      digits.unshift(x % 10);
      x = Math.floor(x / 10);
    }
    if (digits.every((digit) => value % digit === 0)) output.push(value);
  }
  return output;
};
