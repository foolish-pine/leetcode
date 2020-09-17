const isValid = (s) => {
  while (s.includes("abc")) {
    s = s.replace("abc", "");
  }
  return s === "";
};
