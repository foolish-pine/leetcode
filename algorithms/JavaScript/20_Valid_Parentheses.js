const isValid = (s) => {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] ? map[s[i]]++ : (map[s[i]] = 1);
  }
  if (
    !(map["("] === map[")"] && map["{"] === map["}"] && map["["] === map["]"])
  )
    return false;
  return s
    .split(/\(\)|\(.*\)/g)
    .join("")
    .split(/\[\]|\[.*\]/g)
    .join("")
    .split(/\{\}|\{.*\}/g)
    .join("") === ""
    ? true
    : false;
};
