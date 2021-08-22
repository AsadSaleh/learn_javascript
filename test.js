const person = {
  name: "Novita",
  address: "Surabaya",
};

person = "asal-asalan"; // <= TypeError: Assignment to constant variable.

person.address = "Jakarta"; // <= ini bisa. karena yang kita ubah adalah propertinya.

console.log(person);
