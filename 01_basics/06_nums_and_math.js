const score = 400;

const balance = new Number(100);


console.log(score);
console.log(balance);

console.log(balance.toFixed(2)); // precision value


const anotherNumber = 23.8966
const newNumber = 123.8966
const anotherNewNumber = 1123.8966

console.log(anotherNumber.toPrecision(3)); // 23.9
console.log(newNumber.toPrecision(3)); // 124
console.log(anotherNewNumber.toPrecision(3)); // 1.12e+3

const hundreds = 1000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

/**********************************************  MATHS ********************************************************************************/

// console.log(Math.abs(-4));
// console.log(Math.abs(4));

console.log(Math.round(4.4))
console.log(Math.round(4.5))
console.log(Math.round(4.6))

console.log(Math.ceil(3.2));
console.log(Math.floor(3.9));

console.log(Math.random());
console.log(Math.random() * 10);
console.log((Math.random() * 10) + 1);

console.log(Math.floor((Math.random()*20) + 1));

const min = 1
const max = 6

console.log("dice");

console.log(Math.floor((Math.random() * (max - min +1)) + min))
