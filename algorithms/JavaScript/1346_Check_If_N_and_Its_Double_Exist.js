const checkIfExist = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i] * 2) !== i && arr.indexOf(arr[i] * 2) !== -1)
      return true;
  }
  return false;
};
