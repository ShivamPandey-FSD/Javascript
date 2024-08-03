// Primitive Data Types (call by value)

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Symbol 

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);
console.log(typeof id);
console.log(id);
console.log(typeof anotherId);
console.log(anotherId);

// BigInt

const num = 321651651151651615663n;

console.log(num);



// Non-Primitive Data Types (call by reference)

// all data types return object

// Arrays, Objects, Functions

const heroes = ["superman", "batman", "spiderman"]
const info = {
  name: "shivam",
  age: 30
}

console.log(heroes);
console.log(info);

const myFunc = function() {
  console.log("hello");
}

myFunc()

console.log(typeof myFunc);
console.log(typeof heroes);
console.log(typeof info);

