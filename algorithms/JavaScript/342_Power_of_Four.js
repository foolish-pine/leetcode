const isPowerOfFour = (num) => {
  return /^1(00)*$/.test(num.toString(2));
};
