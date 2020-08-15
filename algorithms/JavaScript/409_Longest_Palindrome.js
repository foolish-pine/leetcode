const longestPalindrome = (s) => {
  const map = {};
  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  let total = 0;
  let odd = false;
  for (let value of Object.values(map)) {
    if (value % 2 !== 0) {
      value--;
      odd = true;
    }
    total += value;
  }

  return odd ? ++total : total;
};

// another smart solution
const longestPalindrome = (s) => {
  let ans = 0;
  let keys = {};

  for (let char of s) {
    keys[char] = (keys[char] || 0) + 1;
    if (keys[char] % 2 === 0) ans += 2;
  }
  return s.length > ans ? ans + 1 : ans;
};
