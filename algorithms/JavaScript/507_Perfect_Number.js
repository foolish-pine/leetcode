const checkPerfectNumber = (num) => {
  let sum = 0;
  if (num === 0) return false;
  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) sum += i;
  }
  return num === sum;
};
