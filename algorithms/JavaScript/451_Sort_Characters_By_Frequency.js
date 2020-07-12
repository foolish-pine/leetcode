const frequencySort = (s) => {
  let output = "";
  const map = new Map();
  const chars = s.split("");
  for (const char of chars) {
    map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
  }
  const sortedMap = [...map.entries()].sort((a, b) => b[1] - a[1]);
  for (const char of sortedMap) {
    let i = char[1];
    while (i > 0) {
      output += char[0];
      i--;
    }
  }
  return output;
};
