for (let i = 0; i < 10; i++) {
  process.stdout.write(`${i} `);
}

console.log("\n\n");

for (let i = 11; i < 21; i++) {
  for (let j = 1; j < 11; j++) {
    console.log(i, "*", j, "=", i * j);
  }
  console.log("\n\n")
}


let fruits = ["apple", "banana", "kiwi"]

for (let i=0 ; i<fruits.length ; i++) {
  console.log(fruits[i]);
}
