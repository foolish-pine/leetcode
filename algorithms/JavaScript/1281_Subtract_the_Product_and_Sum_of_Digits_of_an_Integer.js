const subtractProductAndSum = (n) => {
  const splitedN = String(n)
    .split("")
    .map((value) => Number(value));
  const product = splitedN.reduce((a, b) => a * b);
  const sum = splitedN.reduce((a, b) => a + b);

  const diff = product - sum;
  return diff;
};
