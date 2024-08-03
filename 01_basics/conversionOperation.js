let scoreOne = 52;

console.log(typeof scoreOne);

let scoreTwo = "33";

console.log(typeof scoreTwo);

let valueInNumberOne = Number(scoreTwo)

console.log(typeof valueInNumberOne);
console.log(valueInNumberOne);

let scoreThree = "33abc";

let valueInNumberTwo = Number(scoreThree)

console.log(typeof valueInNumberTwo);
console.log(valueInNumberTwo);

let scoreFour = null;

let valueInNumberThree = Number(scoreFour)

console.log(typeof valueInNumberThree);
console.log(valueInNumberThree);

let scoreFive = undefined;

let valueInNumberFour = Number(scoreFive)

console.log(typeof valueInNumberFour);
console.log(valueInNumberFour);

let scoreSix = true;

let valueInNumberFive = Number(scoreSix)

console.log(typeof valueInNumberFive);
console.log(valueInNumberFive);

// "33" => 33
// "33abc" => NaN (Not a Number)
// null => 0
// undefined => NaN (Not a Number)
// true => 1 (boolean)
// false => 0 (boolean)


let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

let isLoggedOut = 0;

let booleanIsLoggedOut = Boolean(isLoggedOut);

console.log(typeof booleanIsLoggedOut);
console.log(booleanIsLoggedOut);

let val1 = "";

let conv1 = Boolean(val1);

console.log(typeof conv1);
console.log(conv1);

let val2 = "Hello";

let conv2 = Boolean(val2);

console.log(typeof conv2);
console.log(conv2);

// 1 => true
// 0 => false
// "" => false
// "Hello" => true

let someNumber = 33

let convertStringToNumber = String(someNumber)

console.log(typeof convertStringToNumber);
console.log(convertStringToNumber);


// ******************************************************  Operations **************************************************

let value = 3
let negValue = -value

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

// let str1 = "hello"
// let str2 = " world"

// let str = str1+str2
// console.log(str);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true); // not recommended
console.log(+""); // not recommended

let gameCounter = 100;
++gameCounter;
console.log(gameCounter++);




