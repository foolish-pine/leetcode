const findTheDifference = (s, t) => {
  for (let i = 0; i < s.split("").length; i++) {
    if (t.includes(s.charAt(i))) {
      t = t.replace(s.charAt(i), "");
    }
  }
  return t[0];
};
