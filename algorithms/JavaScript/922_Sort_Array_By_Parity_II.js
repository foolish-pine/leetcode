const sortArrayByParityII = (A) => {
  const output = [];
  const even = A.filter((num) => num % 2 === 0);
  const odd = A.filter((num) => num % 2 !== 0);
  for (let i = 0; i < even.length; i++) {
    output.push(even[i]);
    output.push(odd[i]);
  }
  return output;
};
