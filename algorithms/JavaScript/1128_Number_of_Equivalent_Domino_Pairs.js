// O(n^2) 3420ms Runtime
const numEquivDominoPairs = (dominoes) => {
  let count = 0;
  for (let i = 0; i < dominoes.length; i++) {
    for (let j = i + 1; j < dominoes.length; j++) {
      if (
        (dominoes[i][0] === dominoes[j][0] &&
          dominoes[i][1] === dominoes[j][1]) ||
        (dominoes[i][1] === dominoes[j][0] && dominoes[i][0] === dominoes[j][1])
      )
        count++;
    }
  }
  return count;
};

// O(n) 88ms Runtime
const numEquivDominoPairs = (dominoes) => {
  let map = new Map();
  let count = 0;
  for (let [a, b] of dominoes) {
    let key = a < b ? `${a}${b}` : `${b}${a}`;

    if (map.has(key)) {
      let currentIndex = map.get(key) + 1;
      map.set(key, currentIndex);
      count += currentIndex;
    } else {
      map.set(key, 0);
    }
  }

  return count;
};
