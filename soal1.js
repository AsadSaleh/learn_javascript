function reverseString(string) {
  // // 1. Ubah string mejadi Array
  // const stringArray = string.split("");
  // console.log("stringArray: ", stringArray);

  // // 2. Reverse arraynya
  // const reversedArray = stringArray.reverse();
  // console.log("reversedArray: ", reversedArray);

  // // 3 . Ubah array menjadi string
  // const result = reversedArray.join("");
  // console.log("result: ", result);

  // return result;

  return string.split("").reverse().join("");
}

module.exports = reverseString;
