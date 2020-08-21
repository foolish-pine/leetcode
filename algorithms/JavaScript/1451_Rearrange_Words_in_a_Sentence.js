const arrangeWords = (text) => {
  return text
    .split(" ")
    .sort((a, b) => a.length - b.length)
    .map((word, index) => {
      word = word.toLowerCase();
      if (index === 0) word = word[0].toUpperCase() + word.slice(1);
      return word;
    })
    .join(" ");
};
