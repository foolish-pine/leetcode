const compareVersion = (version1, version2) => {
  const arr1 = version1.split(".");
  const arr2 = version2.split(".");
  const len = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < len; i++) {
    arr1[i] = Number(arr1[i]) || 0;
    arr2[i] = Number(arr2[i]) || 0;
  }
  const arrs = [arr1, arr2];
  for (let i = 0; i < len; i++) {
    if (arr1[i] > arr2[i]) {
      return 1;
    } else if (arr1[i] < arr2[i]) {
      return -1;
    } else {
      continue;
    }
  }
  return 0;
};
