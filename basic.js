// console.log("Hello World");
// console.log(4 + 9876);
// console.log(4 - 9876);
// console.log(4 * 9876);
// console.log(4 / 9876);
// console.log(5 % 2);
// console.log(2 ** 4);
// console.log(false);

// 1. console.log() // fungsi untuk ngeprint.
// 2. cara comment => //
// 3. operasi matematika

// tipe data:
// "hello world" // suatu value bertipe "string".
// 4 => suatu value bertipe "number".
// true / false => value bertipe "boolean".

// console.log("halo semuanya");
// console.log("halo" + "selamat" + "pagi" + "semuanya" + "ya");

// var halo = "halo";
// console.log(halo + "selamat" + "pagi" + "semuanya" + "ya");

// 1. NULL
// var test = null;
// console.log(test);

// 2. UNDEFINED
// var test1 = undefined;
// console.log(test1);

// CONDITIONAL STATEMENT
// 1. IF - ELSE
// 2. SWITCH

// var umur = 10;

// if (umur < 10) {
//   console.log("terlalu muda, belum boleh vaksin");
// } else if (umur > 70) {
//   console.log("terlalu tua, tidak bisa vaksin.");
// } else {
//   console.log("boleh vaksin");
// }

// switch (umur) {
//   case 10:
//     console.log("umur = 10");
//     break;
//   case 22:
//     console.log("umur = 22. usia produktif");
//     break;
//   default:
//     console.log("lainnya");
//     break;
// }

// LOOP
// 1. for
// 2. while
// 3. do

// for (var i = 1; i < 10; i++) {
//   console.log("berhitung: " + i);
// }

// var i = 1;

// while (i < 50) {
//   console.log("berhitung " + i);
//   // i = i + 1;
//   i++;
// }

// var i = 1;

// do {
//   console.log("pasang batu bata");
//   i++;
// } while (i <= 50);

// 1. Membuat fungsi
// function sapa(namaOrang = "Fulan") {
//   console.log("halo " + namaOrang + ", selamat pagi");
// }

// // 2. cara memanggil fungsi
// sapa();
// sapa("Alif");
// sapa("Nico");
// sapa("Rara");

// Return value of a function

// function penjumlahan(num1, num2) {
//   return num1 + num2;
// }

// console.log(penjumlahan(5, 10));

// function pembagian(pembilang, penyebut) {
//   // if (penyebut == 0) {
//   //   console.log("Tidak bisa membagi dengan 0!");
//   // } else {
//   //   return pembilang / penyebut;
//   // }

//   if (penyebut == 0) {
//     console.log("Tidak bisa membagi dengan 0!");
//     return;
//   }
//   return pembilang / penyebut;
// }

// console.log(pembagian(10, 2));
// console.log(pembagian(5, 2));
// console.log(pembagian(5, 0));

// COMPARATOR

// ==
// memeriksa apakah suatu value sama
// console.log(0 == 0);
// console.log(0 == "0");

// ===
// memeriksa apakah suatu value memiliki nilai dan "tipe" yang sama
// console.log(0 === 0);
// console.log(0 === "0");

// !=
// !==

// <   lt
// <=  lte
// >   gt
// >=  gte
// console.log(1 < 2);
// console.log(1 <= 1);
// console.log(1 < 1);

// var num1 = 50;
// var num2 = 130;

// // lakukan pemeriksaan num1 dan num2
// if (num1 <= num2 && num1 / num2) {
//   console.log("sesuatu");
// }

// var namaOrang = "asad";

// var status = "online" // "offline"

// switch (status) {
//   case "online":
//     console.log("terhubung ke internet");
//     break;
// 	case "offline":
// 		console.log("tidak terhubung ke internet")
//   default:
//     break;
// }

// var pengajar = null;
// if (materi == "js") {
// 	pengajar = "Asad";
// } else {
// 	pengajar = "Ghifari"
// }

// // TERNARY
// var pengajar = materi == "js" ? "Asad" : "Ghifari";

// console.log(true || false);
// console.log(true && false);
