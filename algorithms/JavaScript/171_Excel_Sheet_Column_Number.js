const titleToNumber = (s) => {
  let result = 0;
  for (let i = s.length - 1, k = 0; i >= 0; i--, k++) {
    result += (s.charCodeAt(i) - 64) * 26 ** k;
  }
  return result;
};
