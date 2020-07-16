const wordPattern = (pattern, str) => {
  const patternChar = pattern.split("");
  const words = str.split(" ");
  const map = new Map();
  if (patternChar.length !== words.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    if (map.has(patternChar[i])) {
      if (map.get(patternChar[i]) !== words[i]) return false;
    } else {
      if ([...map.values()].includes(words[i])) return false;
      map.set(patternChar[i], words[i]);
    }
  }
  return true;
};
