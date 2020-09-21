const thousandSeparator = (n) => {
  if (String(n).length < 4) return String(n);
  n = String(n).split("").reverse();
  let i = 3;
  while (i < n.length) {
    n.splice(i, 0, ".");
    i += 4;
  }
  return n.reverse().join("");
};
