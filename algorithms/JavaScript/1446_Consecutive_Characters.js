const maxPower = (s) => {
  let max = 1;
  let count = 1;
  s = s.split("");
  for (let i = 0; i < s.length - 1; i++) {
    s[i] === s[i + 1] ? count++ : (count = 1);
    if (count > max) max = count;
  }
  return max;
};
