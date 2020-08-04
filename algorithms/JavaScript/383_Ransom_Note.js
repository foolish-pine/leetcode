const canConstruct = (ransomNote, magazine) => {
  const obj = {};
  for (const chr of magazine.split("")) {
    obj[chr] === undefined ? (obj[chr] = 1) : obj[chr]++;
  }
  for (const chr of ransomNote.split("")) {
    if (obj[chr] === undefined || obj[chr] === 0) {
      return false;
    } else {
      obj[chr]--;
    }
  }
  return true;
};
