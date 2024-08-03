// basic comparison

// console.log(3 > 2);
// console.log(3 >= 2);
// console.log(3 < 2);
// console.log(3 <= 2);
// console.log(3 == 2);
// console.log(3 != 2);

console.log("2" > 1);
console.log("02" < 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// the null output is different because equity check (==) and comparison (<,<=,>,>=) works differently in javascript 
// Comparisons convert null to a number , treating it as 0.
// That's why null >= 0 is true and null == 0 is false

// === => strict check => it checks the data type as well

console.log("2" == 2); // true
console.log("2" === 2); // false => strict check 
