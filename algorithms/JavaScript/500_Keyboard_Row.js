const findWords = (words) => {
  const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

  const output = words.filter((value) => {
    let set = new Set();
    for (const letter of value) {
      if (firstRow.includes(letter.toUpperCase())) {
        set.add(1);
      } else if (secondRow.includes(letter.toUpperCase())) {
        set.add(2);
      } else {
        set.add(3);
      }
    }
    return set.size === 1;
  });
  return output;
};
