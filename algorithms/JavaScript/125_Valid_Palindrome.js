const isPalindrome = (s) => {
  const text = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return text === text.split("").reverse().join("");
};
