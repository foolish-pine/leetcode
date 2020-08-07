const findOcurrences = (text, first, second) => {
  const output = [];
  text = text.split(" ");
  for (let i = 0; i < text.length - 2; i++) {
    if (text[i] === first && text[i + 1] === second) output.push(text[i + 2]);
  }
  return output;
};
