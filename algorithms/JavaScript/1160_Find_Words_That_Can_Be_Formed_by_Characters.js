const countCharacters = (words, chars) => {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let arr = chars.split("");

    while (word.length > 0) {
      if (arr.includes(word[0])) {
        arr.splice(arr.indexOf(word[0]), 1);
        word = word.slice(1);
      } else {
        break;
      }
    }
    if (word.length === 0) count += words[i].length;
  }
  return count;
};
