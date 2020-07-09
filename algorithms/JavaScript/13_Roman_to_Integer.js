const romanToInt = (s) => {
  const map = new Map([
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ]);
  let int = 0;
  for (let i = 0; i < s.length; i++) {
    const l1 = s[i];
    const l2 = s[i + 1];
    if (map.has(`${l1}${l2}`)) {
      int += map.get(`${l1}${l2}`);
      i++;
    } else {
      int += map.get(l1);
    }
  }
  return int;
};
