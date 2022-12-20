const person = {
  name: "Huesin",
  age: 19,
  introduce() {
    console.log(`Hello, my name is ${this.name} & I'm ${this.age} years old`);
  },
};

person.introduce();

person.name = "Ghozi";

person.introduce();
