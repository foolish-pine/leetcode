const sumZero = (n) => {
  const arr = [];
  const half = Math.floor(n / 2);

  for (let i = 1; i <= half; i++) {
    arr.push(i);
    arr.push(-i);
  }

  if (n % 2) arr.push(0);

  return arr;
};
