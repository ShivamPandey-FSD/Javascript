function sayMyName() {
  console.log("Shivam");
}

console.log(sayMyName); // reference of a function
sayMyName() // execution of a function

function addTwoNumbers(num1, num2) { // function body with parameters
  console.log(num1 + num2);
}

addTwoNumbers(3, 4) // funciton call with arguments
addTwoNumbers(3, "4")
addTwoNumbers(3, "a")
addTwoNumbers(3, null)

function sum(num1, num2) {
  return num1 + num2;
}

const result = sum(3, 5)
console.log("Result: ", result);

function loginWithMessage(username) {
  if (!username) {
    console.log("Please enter username");
    return;
    
  }
  return `${username} just logged in`
}

const message = loginWithMessage("Dev");
console.log(message);

const anotherMessage = loginWithMessage();

const anotherMessageOne = loginWithMessage("");

function login(name = "Garima") { // function with default parameter value
  return `${name} just logged in`
}

const mes = login()
console.log(mes);

// function calculateCartPrince(...args) { // rest parameter
//   return args
// }

function calculateCartPrince(val1, val2, ...args) {
  return args
}

console.log(calculateCartPrince(200, 400, 600, 800, 1000));

const user = {
  name: "Ganesh",
  age: 20
}

function sayHello(obj) {
  return `Hello, ${obj.name}`
}

console.log(sayHello(user));
console.log(sayHello({
  name: "Tarun",
  age: 20
}));

function num(arr) {
  return arr[0]
}

const arr = [200, 400, 600]
console.log(num(arr));

console.log(num([100, 300, 500]));

