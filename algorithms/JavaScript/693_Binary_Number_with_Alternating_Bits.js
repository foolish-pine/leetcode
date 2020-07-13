const hasAlternatingBits = (n) => {
  const bit = n.toString(2).split("");
  for (let i = 1; i < bit.length; i++) {
    if (bit[i - 1] === bit[i]) return false;
  }
  return true;
};
