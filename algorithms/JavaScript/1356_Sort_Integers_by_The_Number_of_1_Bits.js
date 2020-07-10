const sortByBits = (arr) => {
  return arr.sort(
    (a, b) =>
      (a.toString(2).match(/1/g) || "").length -
        (b.toString(2).match(/1/g) || "").length || a - b
  );
};

const sortByBits = (arr) => {
  const output = [];
  const map = new Map();
  for (const value of arr.sort((a, b) => a - b)) {
    const bitNum = (value.toString(2).match(/1/g) || []).length;
    map.has(bitNum)
      ? map.set(bitNum, [...map.get(bitNum), value])
      : map.set(bitNum, [value]);
  }
  for (const key of [...map.keys()].sort((a, b) => a - b)) {
    output.push(...map.get(key));
  }
  return output;
};
