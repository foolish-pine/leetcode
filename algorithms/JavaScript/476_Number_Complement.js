const findComplement = (num) => {
  const bits = num.toString(2).split("");
  for (let i = 0; i < bits.length; i++) {
    bits[i] === "0" ? (bits[i] = "1") : (bits[i] = "0");
  }
  return parseInt(bits.join(""), 2);
};
