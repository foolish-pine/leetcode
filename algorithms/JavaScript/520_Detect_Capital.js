const detectCapitalUse = (word) => {
  const lower = "abcdefghijklmnopqrstuvwxyz".split("");
  const upper = lower.map((x) => x.toUpperCase());
  if (word.split("").every((x) => upper.includes(x))) return true;
  if (word.split("").every((x) => lower.includes(x))) return true;
  if (
    upper.includes(word.split("")[0]) &&
    word
      .substr(1)
      .split("")
      .every((x) => lower.includes(x))
  )
    return true;
  return false;
};

// one-liner
const detectCapitalUse = (word) => {
  return (
    word === word.toUpperCase() ||
    word === word[0] + word.substr(1).toLowerCase()
  );
};
