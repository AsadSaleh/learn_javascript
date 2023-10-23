class Animal {
  sound() {
    console.log("aaaaa");
  }

  age() {
    console.log("im 20 years old");
  }
}

class Monkey extends Animal {
  sound() {
    super.sound();
    console.log("uu aa");
  }
}

class Dog extends Animal {
  sound() {
    console.log("guk guk");
  }
}

const monkey = new Monkey();
monkey.age();
monkey.sound();
