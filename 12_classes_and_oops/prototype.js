// let myNmae = "shivam     ";

// console.log(myNmae.length);

const myHeroes = ["thor", "spiderman"];

const heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function() {
    console.log(`Spidy power is ${this.spiderman}`);
  }
}

Object.prototype.newFunction = function() {
  console.log("New function in all objects");
}

Array.prototype.anotherFunction = function() {
  console.log("another function");
}

// heroPower.newFunction();
// myHeroes.newFunction();
// myHeroes.anotherFunction();
// heroPower.anotherFunction();

// imheritance

const User = {
  name: "chai",
  email: "chai@abc.com"
}

const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignment: "Js Assignments",
  fullTime: true,
  __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// modern syntax of __proto__
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUser = "ChaiAurCode     "

String.prototype.trueLength = function() {
  console.log(`True length is: ${this.trim().length}`)
}

anotherUser.trueLength()
"shivam    ".trueLength()
