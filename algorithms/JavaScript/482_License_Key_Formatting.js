const licenseKeyFormatting = (S, K) => {
  const str = S.split("-").join("");
  let output = "";
  output += str.substr(0, str.length % K).toUpperCase();
  for (let i = str.length % K; i < str.length; i += K) {
    if (output !== "") output += "-";
    output += str.substr(i, K).toUpperCase();
  }
  return output;
};
