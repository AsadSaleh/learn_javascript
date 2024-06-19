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
console.log(ubahDetik(10_000));

// assert.equal(konversiWaktu(15), "15 detik");
// assert.equal(konversiWaktu(60), "1 menit");
// assert.equal(konversiWaktu(70), "1 menit, 10 detik");
// assert.equal(konversiWaktu(125), "2 menit, 5 detik");
// assert.equal(konversiWaktu(3600), "1 jam");
// assert.equal(konversiWaktu(3601), "1 jam, 1 detik");
// assert.equal(konversiWaktu(3660), "1 jam, 1 menit");
// assert.equal(konversiWaktu(4000), "1 jam, 6 menit, 40 detik");
// assert.equal(konversiWaktu(10_000), "2 jam, 46 menit, 40 detik");
