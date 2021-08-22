// var namaOrang = "Asad";
// var umur = 26;
// var domisili = "Jakarta Selatan";

// var person2 = "Wildan"

// OBJECT

// var person = {
//   nama: "As'ad Saleh Umar",
//   umur: 26,
//   isAdmin: true,
//   domisili: "Jakarta Selatan",
//   alamatLengkap: {
//     jalan: "Jalan ujung aspal",
//     kelurahan: "Pejaten Barat",
//     kecamatan: "Pasar Minggu",
//   },
//   koleksiMobil: ["Ferrari", "Masserati"],
//   panggil() {
//     console.log("hallo", this.nama);
//   },
//   buatAlamatLengkap() {
//     console.log(
//       this.alamatLengkap.jalan +
//         ", " +
//         this.alamatLengkap.kelurahan +
//         ", " +
//         this.alamatLengkap.kecamatan
//     );
//   },
// };

// // // Mengambil value
// console.log(person.nama);
// console.log(person.domisili);
// console.log(person.alamatLengkap.kecamatan);

// // // Mengubah value
// person.alamatLengkap.kecamatan = "Cilandak"; // <= Mengubah value "kecamatan" menjadi Cilandak
// console.log(person.alamatLengkap.kecamatan);

// // // Mengakses Method di dalam objek

// person.panggil();
// person.buatAlamatLengkap();

// console.log(person.koleksiMobil);

// var film1 = {
//   title: "Star Wars - Revenge of the sith",
//   director: "Wildan",
// };
// var film2 = {
//   title: "Star Trek",
//   director: "Alif",
// };
// var film3 = {
//   title: "Avenger",
//   director: "Michael Bay",
// };
// var film4 = {
//   title: "Spiderman Work From Home - PPKM edition",
//   director: "Michael Bay",
// };
// var koleksiFilm = [film1, film2, film3, film4];
// // 0      1      2      3
// console.log("awal", koleksiFilm);

// INDEX
// console.log("ambil film pertama", koleksiFilm[0]);

// SLICE
// console.log("ambil spiderman dan avenger", koleksiFilm.slice(2));
// console.log("ambil star trek dan avenger", koleksiFilm.slice(1, 3));

// SPLICE
// saya pengen film2 => Avenger End Game
// koleksiFilm.splice(1, 1, { title: "Avenger End Game", director: "Nico" });
// console.log(koleksiFilm);

// koleksiFilm.push(film3);
// console.log("setelah push", koleksiFilm);
// koleksiFilm.pop();
// console.log("setelah pop", koleksiFilm);

// var koleksiMobil = ["toyota", "maserati", "ferari"];
// console.log(koleksiMobil.includes("toyota"));
// console.log(koleksiMobil.includes("daihatsu"));

//  FIND
// console.log(koleksiFilm);
// saya pengen nyari ada gak sih film yang directornya "Christopher Nolan"
// koleksiFilm.includes({ title: /* bisa apa aja */, director: "Christopher Nolan"})
// function cariFilmYangDirectornyaChristopherNolan(film) {
//   if (film.director === "Christopher Nolan") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(koleksiFilm.find(cariFilmYangDirectornyaChristopherNolan));

//  FOREACH

// var film1 = {
//   title: "Star Wars - Revenge of the sith",
//   director: "Wildan",
//   rating: 9,
// };
// var film2 = {
//   title: "Star Trek",
//   director: "Alif",
//   rating: 4,
// };
// var film3 = {
//   title: "Avenger",
//   director: "Michael Bay",
//   rating: 7,
// };
// var film4 = {
//   title: "Spiderman Work From Home - PPKM edition",
//   director: "Michael Bay",
//   rating: 8,
// };
// var film5 = {
//   title: "Batman the dark knight",
//   director: "Christopher Nolan",
//   rating: 10,
// };
// var koleksiFilm = [film1, film2, film3, film4, film5];

// saya pengen nge-print title untuk setiap film dalam koleksi
// for (var i = 0; i < koleksiFilm.length; i++) {
//   console.log(koleksiFilm[i].title);
// }

// function printJudulFilm(film) {
//   console.log(film.title);
// }

// koleksiFilm.forEach(printJudulFilm);

// FILTER

// var film1 = {
//   title: "Star Wars - Revenge of the sith",
//   director: "Wildan",
//   rating: 9,
// };
// var film2 = {
//   title: "Star Trek",
//   director: "Alif",
//   rating: 4,
// };
// var film3 = {
//   title: "Avenger",
//   director: "Michael Bay",
//   rating: 7,
// };
// var film4 = {
//   title: "Spiderman Work From Home - PPKM edition",
//   director: "Michael Bay",
//   rating: 8,
// };
// var film5 = {
//   title: "Batman the dark knight",
//   director: "Christopher Nolan",
//   rating: 10,
// };
// var koleksiFilm = [film1, film2, film3, film4, film5];

//Kasus: saya ingin array baru film yang ratingnya lebih dari 8.

function ambilFilmYangRatingnyaLebihDari8(film) {
  if (film.rating > 8) {
    return true;
  } else {
    return false;
  }
}

// console.log(koleksiFilm.filter(ambilFilmYangRatingnyaLebihDari8));

// MAP
var film1 = {
  title: "Star Wars - Revenge of the sith",
  director: "Wildan",
  rating: 9,
};
var film2 = {
  title: "Star Trek",
  director: "Alif",
  rating: 4,
};
var film3 = {
  title: "Avenger",
  director: "Michael Bay",
  rating: 7,
};
var film4 = {
  title: "Spiderman Work From Home - PPKM edition",
  director: "Michael Bay",
  rating: 8,
};
var film5 = {
  title: "Batman the dark knight",
  director: "Christopher Nolan",
  rating: 10,
};
var koleksiFilm = [film1, film2, film3, film4, film5];

// saya mau array baru yang isinya hanya directornya aja. => ["Michael Bay", "Wildan"]
// maunya hanya yang ratingnya diatas 8

function ambilJudulDariFilm(film) {
  return film.title;
}

console.log(
  koleksiFilm.filter(ambilFilmYangRatingnyaLebihDari8).map((film) => film.title)
);

// BEDA Map vs Filter
// array length 6 => map => array length 6
// array length 6 => filter => array length 3

// Beda filter vs find
// find => sekali ketemu => selesai. return item di dalam array.
// filter => jalan untuk setiap item dalam array. return array lagi.
