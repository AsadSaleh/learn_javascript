class Unicorn {
  constructor(name) {
    this.name = name;
  }

  message() {
    const x = `${this.name} is awesome!`;
    console.log(x);
    return x;
  }
}

const unicorn = new Unicorn("Rainbow");
// unicorn.message();

// Grab the method off the class instance
const message = unicorn.message;

message();
