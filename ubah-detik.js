const detik_dalam_satu_jam = 3600;
const detik_dalam_satu_menit = 60;

function ubahDetik(input) {
  // 4000

  // berapa jam yang ada di dalam `input` tersebut
  const jam = Math.floor(input / detik_dalam_satu_jam); // 1

  // kita kurangi input dengan jam yang sudah kita punya
  input = input - jam * detik_dalam_satu_jam;
  //        4000 -  ( 1 x 3600) = 400

  const menit = Math.floor(input / detik_dalam_satu_menit); // 6

  input = input - menit * detik_dalam_satu_menit;
  // .     400 - (6 x 60) = 40

  const detik = input;

  return { jam, menit, detik };
}

console.log(ubahDetik(4000));
console.log(ubahDetik(10000000));
