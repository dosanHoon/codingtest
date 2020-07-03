function 이그램(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (str.length > i + 1) {
      result.push([str[i], str[i + 1]]);
    }
  }
  return result;
}


export default 이그램