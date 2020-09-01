const maxNumberOfBalloons = (text) => {
  const balloon = "balon".split("");
  const map = {};
  for (let i = 0; i < balloon.length; i++) {
    map[balloon[i]] = 0;
  }
  for (let i = 0; i < text.length; i++) {
    if (balloon.includes(text[i])) map[text[i]]++;
  }
  return Math.min(
    map.b,
    map.a,
    Math.floor(map.l / 2),
    Math.floor(map.o / 2),
    map.n
  );
};

// another solution
const maxNumberOfBalloons = (text) => {
  const obj = {};
  let count = 0;
  for (const char of text) {
    obj[char] = (obj[char] || 0) + 1;
  }
  while (
    obj["a"] > 0 &&
    obj["b"] > 0 &&
    obj["l"] > 1 &&
    obj["n"] > 0 &&
    obj["o"] > 1
  ) {
    count++;
    obj["a"]--;
    obj["b"]--;
    obj["l"] -= 2;
    obj["n"]--;
    obj["o"] -= 2;
  }
  return count;
};
