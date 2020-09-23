// Runtime: 5284ms
const countSubstrings = (s) => {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length - i; j++) {
      const substr = s.substr(i, j + 1);
      arr.push(substr);
    }
  }
  const filtered = arr.filter(
    (str) => str === str.split("").reverse().join("")
  );
  return filtered.length;
};

// Runtime: 80ms
const countSubstrings = (s) => {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < i + 2; j++) {
      let l = i;
      let r = j;

      while (l >= 0 && r < s.length && s[l] === s[r]) {
        count++;
        l--;
        r++;
      }
    }
  }
  return count;
};
