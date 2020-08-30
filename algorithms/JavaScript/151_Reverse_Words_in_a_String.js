const reverseWords = (s) => {
  return s
    .trim()
    .split(" ")
    .filter((x) => x !== "")
    .reverse()
    .join(" ");
};
