const findSpecialInteger = (arr) => {
  let count = 1;
  if (arr.length === 1) return arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] === arr[i + 1] ? count++ : (count = 1);
    if (count > arr.length / 4) return arr[i];
  }
};
