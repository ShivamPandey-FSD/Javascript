const myArray = [1, 2, 3, 4, 5]

// for of
for (const item of myArray) {
  console.log(item);
}

const greeting = "Hello Brother"

for (const greet of greeting) {
  console.log(`Each characrter: ${greet}`);
}

console.log("\n");

// for in
for (const item in myArray) {
  console.log(item);
}

console.log("\n");

const map = new Map();
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":", value);
}

// objects are not iterable using for-of
