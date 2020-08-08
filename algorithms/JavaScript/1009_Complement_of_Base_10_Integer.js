const bitwiseComplement = (N) => {
  const comp = N.toString(2)
    .split("")
    .map((x) => {
      return x === "0" ? "1" : "0";
    })
    .join("");
  return parseInt(comp, 2);
};
