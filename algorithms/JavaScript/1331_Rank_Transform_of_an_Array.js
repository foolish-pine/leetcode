const arrayRankTransform = (arr) => {
  const sortedArr = Array.from(arr).sort((a, b) => a - b);
  const map = new Map();
  let rank = 1;
  for (let i = 0; i < sortedArr.length; i++) {
    if (!map.has(sortedArr[i])) {
      map.set(sortedArr[i], rank);
      rank++;
    }
  }
  const output = arr.map((value) => map.get(value));
  return output;
};
