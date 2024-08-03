// object can be declared in two ways =>
// 1. literals
// 2. constructors

// singleton => when we create objects using constructor its always singleton

// object literals

const mySym = Symbol("key1")

const jsUser = {
  name: "Ganesh",
  "full name": "Ganesh Chaturvedi",
  age: 17,
  [mySym]: "newKey",
  location: 'Delhi',
  email: 'ganesh123@gmail.com',
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
};

console.log(jsUser.name);
console.log(jsUser["email"]);

// can't access full name using dot notation (.) => jsUser.full name not possible

console.log(jsUser["full name"]);


console.log(jsUser[mySym]);

jsUser["full name"] = "Ganesh Pandey"

console.log(jsUser);

// Object.freeze(jsUser); // it prevents the object from overwriting the values

jsUser["full name"] = "Ganesh Kumar"

console.log(jsUser);

jsUser.email = "ganesh1234@gmail.com"

console.log(jsUser);

jsUser.greeting = function() {
  console.log("Hello JS user");
}

console.log(jsUser.greeting); // it returns the reference of the funciton => [Function (anonymous)]
console.log(jsUser.greeting());

jsUser.greetingTwo = function() {
  console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greetingTwo());

