// Example 1: Fibonacci
// 1, 1, 2, 3, 5, 8, 13, ...
// Goal akhir: fungsi untuk menghitung fibonaci ke-n
// fibonacci ke n = n-1 + n-2.

const daftarFibonacci = {
  43: 433494437,
};

function fibonaci(n) {
  if (n === 1) {
    daftarFibonacci[1] = 1;
    return 1;
  }
  if (n === 2) {
    daftarFibonacci[2] = 1;
    return 1;
  }
  if (daftarFibonacci.hasOwnProperty(n)) {
    return daftarFibonacci[n]; // <= ambil data dari object daftarFibonacci
  } else {
    const hasilPerhitungan = fibonaci(n - 1) + fibonaci(n - 2);
    daftarFibonacci[n] = hasilPerhitungan; // <= merekam ke object daftarFibonacci
    return hasilPerhitungan;
  }
}

console.log(fibonaci(50)); // 13
console.log("daftarFibonacci: ", daftarFibonacci);
