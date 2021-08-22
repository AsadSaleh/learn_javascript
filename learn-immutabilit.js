const person1 = {
  name: "As'ad Saleh Umar",
  job: "Software Engineer",
  age: 26,
};

// // Cara yang tidak baik.
// const person2 = person1;
// person2.name = "Jack Sparrow";

// Cara yang baik:
// const person2 = Object.assign({}, person1, { name: "Jack Sparrow" });

// Syntax yang lebih simpel (Spread operator):
const person3 = {
  ...person1,
  name: "Ucink",
};

console.log("person1: ", person1);
console.log("person2: ", person2);
console.log("person3: ", person3);
