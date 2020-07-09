const reverse = (x) => {
  const absX = Math.abs(x);
  const reversedX = Number(String(absX).split("").reverse().join(""));
  if (reversedX > 2 ** 31 - 1 || reversedX < -1 * 2 ** 31) {
    return 0;
  } else if (x < 0) {
    return -1 * reversedX;
  } else {
    return reversedX;
  }
};
