function printPiramida(ukuran) {
  // Exit early if ukuran < 3
  if (ukuran < 3) {
    return;
  }

  // Determine the character for the pyramid peak
  var puncak = ukuran % 2 === 0 ? "##" : "#";

  // Loop through each row
  for (var tingkat = 1; tingkat <= ukuran; tingkat++) {
    var baris = "";
    var jumlahSpasi = ukuran - tingkat;

    // Add leading spaces
    for (var i = 0; i < jumlahSpasi; i++) {
      baris += " ";
    }

    // Add hashes
    for (var j = 0; j < tingkat * 2 - 1; j++) {
      baris += "#";
    }

    // Print the row
    console.log(baris);
  }
}

// Contoh penggunaan
printPiramida(3);
printPiramida(5);
printPiramida(8);
printPiramida(20);

console.log(acak[0]);
console.log(acak[1]);
console.log(acak[2]);
console.log(acak[3]);
console.log(acak[4]);
console.log(acak[5]);
console.log(acak[6]);
