function extractHashSymbols(str) {
  let hashSymbols = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "#") {
      hashSymbols += "#";
    }
  }
  return hashSymbols;
}
