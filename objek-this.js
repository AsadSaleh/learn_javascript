const naruto = {
  nama: "Naruto Uzumaki",
  pekerjaan: "Hokage",
  perkenalan() {
    console.log(
      `Nama saya ${naruto.nama} dan pekerjaan saya adalah ${naruto.pekerjaan}`
    );
  },
};

naruto.perkenalan();
