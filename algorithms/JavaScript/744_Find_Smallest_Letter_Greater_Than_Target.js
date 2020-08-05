const nextGreatestLetter = (letters, target) => {
  letters.push(target);
  letters.sort();
  return letters[letters.lastIndexOf(target) + 1] || letters[0];
};

// 二分探索法(Binary Search)
const nextGreatestLetter = (letters, target) => {
  let mid = Math.floor(letters.length / 2);
  let start = 0;
  let end = letters.length - 1;

  while (mid > start) {
    if (letters[mid] === target) {
      break;
    } else if (letters[mid] > target) {
      end = mid;
    } else if (letters[mid] < target) {
      start = mid;
    }

    mid = Math.floor((end - start) / 2);
  }

  while (letters[mid] <= target) {
    mid++;
  }

  return letters[mid] || letters[0];
};
