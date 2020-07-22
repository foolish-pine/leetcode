const generateTheString = (n) => {
  return n % 2 === 1
    ? Array(n).fill("a").join("")
    : Array(n - 1)
        .fill("a")
        .join("") + "b";
};
