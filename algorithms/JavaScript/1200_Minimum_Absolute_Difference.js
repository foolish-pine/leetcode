const minimumAbsDifference = (arr) => {
  let output = [];
  let min = Number.MAX_SAFE_INTEGER;
  arr = arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    min = Math.min(min, arr[i] - arr[i - 1]);
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === min) output.push([arr[i - 1], arr[i]]);
  }
  return output;
};
