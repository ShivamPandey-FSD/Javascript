const name = "Shivam Pandey"
const score = 100;

// console.log(name + " " + score);

console.log(`Hello ${name}, your score is ${score}.`); // String Interpolation

const gameName = new String("Vihaan");

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__); // prototype

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.trim());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));
console.log(gameName.substring(0, 5));


const newName = gameName.slice(-6, 4)
console.log(newName);



