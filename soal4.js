// Soal 4: Ambil data dari 'https://jsonplaceholder.typicode.com/posts'
// filter hanya yang userId nya genap
// return array of objek berbentuk { id, title }

// Hint 1: Install Axios (npm library, set up: npm init);
// Hint 2: gunakan async-await untuk dapetin datany
// Hint 3: gunakan .filter & .map untuk mendapatkan data yang sesuai
// Hint 4: gunakan modulo untuk memeriksa ganjil / genap
// const sisaPembagian = 11 % 2; // 1 = ganjil
// const sisaPembagian = 4 % 2; // 0 = genap

const axios = require("axios");

async function getData() {
  // // 1
  // axios
  //   .get("")
  //   .then((value) => console.log(value))
  //   .catch((error) => console.log(error));

  // // 2
  // try {
  //   const res = await axios.get("");
  //   console.log(res);
  // } catch (error) {
  //   console.log(error);
  // }

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log("haha");

    // throw {
    //   message: "Cannot get data",
    //   desc: "Cannot get data because internet not connected",
    // };

    return response.data
      .filter((item) => item.userId % 2 === 0)
      .map((item) => ({ id: item.id, title: item.title }))
      .filter((item, index) => index <= 9);
  } catch (e) {
    console.log(e);
  }
}

async function runProgram() {
  console.log(await getData());
}

runProgram();
