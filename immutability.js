const originalPerson = {
  name: "As'ad Saleh Umar",
  age: 26,
  job: "Software Engineer",
};

const person2 = originalPerson;

person2.name = "Jack Sparrow";
person2.job = "Bajak Laut";

console.log("person2: ", person2);

// Solusi 0. Assign manual
const person3 = {};

person3.name = "Iron Man";
person3.job = "Superhero";

console.log("person3: ", person3);

// Solusi 1A. Gunakan Object.assign
const person4 = Object.assign({}, originalPerson, {
  name: "Captain America",
  job: "Superhero",
});

console.log("person4: ", person4);

// Solusi 1B. Gunakan spread operator
const person5 = {
  ...originalPerson,
  name: "Batman",
  job: "Penjaga Malam",
};

console.log("person5: ", person5);

console.log("originalPerson: ", originalPerson);
