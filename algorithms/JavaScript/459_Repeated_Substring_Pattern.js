// blute-force
const repeatedSubstringPattern = (s) => {
  for (let i = 1; i < s.length; i++) {
    if (s.length % i === 0 && s.slice(0, i).repeat(s.length / i) === s)
      return true;
  }
  return false;
};

// amazing one-linear
const repeatedSubstringPattern = (s) => {
  return s.repeat(2).slice(1, -1).includes(s);
};
