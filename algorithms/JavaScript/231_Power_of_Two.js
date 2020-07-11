// 解法1
const isPowerOfTwo = (n) => {
  return n.toString(2).replace(/0/g, "").length === 1;
};

// 解法2
const isPowerOfTwo = (n) => {
  return n ? Math.log2(n) === Math.floor(Math.log2(n)) : false;
};
