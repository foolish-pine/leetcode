const dailyTemperatures = (T) => {
  let haveToWait = 0;
  let output = [];
  for (let i = 0; i < T.length; i++) {
    for (let j = i + 1; j < T.length; j++) {
      if (T[i] < T[j]) {
        haveToWait = j - i;
        break;
      }
    }
    output.push(haveToWait);
    haveToWait = 0;
  }
  return output;
};
