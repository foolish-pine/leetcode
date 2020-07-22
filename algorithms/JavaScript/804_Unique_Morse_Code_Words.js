const uniqueMorseRepresentations = (words) => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  const morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  const tranlatedWords = [];
  for (const word of words) {
    tranlatedWords.push(
      word
        .split("")
        .map((x) => morse[alphabets.indexOf(x)])
        .join("")
    );
  }
  return new Set(tranlatedWords).size;
};
