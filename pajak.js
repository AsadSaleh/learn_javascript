const progressiveTaxes = [
  {
    batasBawah: 0,
    batasAtas: 60_000_000,
    persentasePajak: 0.05,
    label: "0 - Rp60juta",
  },
  {
    batasBawah: 60_000_000,
    batasAtas: 250_000_000,
    persentasePajak: 0.15,
    label: "Rp60juta - Rp250juta",
  },
  {
    batasBawah: 250_000_000,
    batasAtas: 500_000_000,
    persentasePajak: 0.25,
    label: "250juta - Rp500juta",
  },
  {
    batasBawah: 500_000_000,
    batasAtas: 5_000_000_000,
    persentasePajak: 0.3,
    label: "500juta - Rp5M",
  },
  {
    batasBawah: 5_000_000_000,
    batasAtas: Infinity,
    persentasePajak: 0.35,
    label: "> Rp5M",
  },
];

function calculateProgressiveTax(pkp) {
  let newArr = [];
  for (let i = 0; i < progressiveTaxes.length; i++) {
    const cur = progressiveTaxes[i];

    if (pkp < cur.batasBawah) {
      newArr.push({
        ...cur,
        pphTerutang: 0,
        besaranKenaPajak: 0,
      });
    }
    if (pkp >= cur.batasAtas) {
      const besaranKenaPajak = cur.batasAtas - cur.batasBawah;
      newArr.push({
        ...cur,
        pphTerutang: besaranKenaPajak * cur.persentasePajak,
        besaranKenaPajak,
      });
    }

    if (pkp >= cur.batasBawah && pkp < cur.batasAtas) {
      const besaranKenaPajak = pkp - cur.batasBawah;
      newArr.push({
        ...cur,
        pphTerutang: besaranKenaPajak * cur.persentasePajak,
        besaranKenaPajak,
      });
    }
  }

  return newArr;
}
