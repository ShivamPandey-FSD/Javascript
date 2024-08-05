// let a = 10;
// const b = 20;
// var c = 30;

// {  } scope of a funciton, condition or a program

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a); // ReferenceError: a is not defined a is in block space
// console.log(b); // ReferenceError: b is not defined b is in block space
console.log(c); // 30

/** Problem of var */

var d = 300

if (true) {
  var d = 40
}

console.log(d); // 40

/** how let solve the problem */

let e = 500

if (true) {
  let e = 50
  console.log(e); // 50

}

console.log(e); // 500

// let have block scope 
// var have global scope


function one() {
  const username = "shivam"

  function two() {
    const website = "youtube"
    console.log(username);
  }

  // console.log(website);

  two()

}

one();

console.log(addOne(5)); // no problem it works
function addOne(num) {
  return num + 1;
}

console.log(addTwo(7)); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) { // this is also a funciton but it sometimes called expression because it declared as a variable
  return num + 2;
}

// console.log(addOne(5));
// console.log( addTwo(7));
