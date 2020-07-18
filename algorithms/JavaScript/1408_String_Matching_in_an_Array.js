const stringMatching = (words) => {
  const output = [];
  words.sort((a, b) => a.length - b.length);
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].indexOf(words[i]) !== -1) output.push(words[i]);
    }
  }
  return [...new Set(output)];
};
