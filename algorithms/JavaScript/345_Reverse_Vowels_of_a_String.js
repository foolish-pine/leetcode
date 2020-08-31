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
