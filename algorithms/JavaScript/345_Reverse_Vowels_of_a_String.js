const reverseVowels = (s) => {
  let answer = "";
  const vowels = s
    .split("")
    .filter((x) => "aiueoAIUEO".split("").includes(x))
    .reverse();
  for (let i = 0; i < s.length; i++) {
    if ("aiueoAIUEO".split("").includes(s[i])) {
      answer += vowels.shift();
    } else {
      answer += s[i];
    }
  }
  return answer;
};

// faster solution
const reverseVowels = (str) => {
  let s = str.split("");
  const vowels = "aiueoAIUEO";

  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (!vowels.includes(s[left])) {
      left++;
    } else if (!vowels.includes(s[right])) {
      right--;
    } else {
      let tmp = s[left];
      s[left] = s[right];
      s[right] = tmp;
      left++;
      right--;
    }
  }

  return s.join("");
};
