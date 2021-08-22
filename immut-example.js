const animals = ["Cat", "Dog", "Horse", "Snake"];
const animals2 = animals;
console.log({ animals, animals2 });
animals2[3] = "Whale";
console.log({ animals, animals2 });
